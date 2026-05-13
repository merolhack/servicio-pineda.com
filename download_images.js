const fs = require('fs');
const path = require('path');
const https = require('https');

const stitchDir = path.join(__dirname, 'stitch');
const outDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

let images = new Map();
let counter = 1;

function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(findHtmlFiles(file));
        } else if (file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const htmlFiles = findHtmlFiles(stitchDir);

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /src="(https:\/\/lh3\.googleusercontent\.com\/[^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (!images.has(match[1])) {
            const ext = match[1].includes('ADBb0uj') ? '.png' : '.jpg'; // basic assumption for logo
            let name = match[1].includes('ADBb0uj') ? 'logo.png' : `image-${counter++}.jpg`;
            images.set(match[1], name);
        }
    }
});

const downloads = Array.from(images.entries()).map(([url, name]) => {
    return new Promise((resolve, reject) => {
        const dest = path.join(outDir, name);
        if (fs.existsSync(dest)) return resolve({url, name});
        
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve({url, name}));
            });
        }).on('error', err => {
            fs.unlink(dest);
            reject(err);
        });
    });
});

Promise.all(downloads).then(results => {
    console.log(JSON.stringify(results, null, 2));
}).catch(err => {
    console.error('Error downloading:', err);
});
