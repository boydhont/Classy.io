//TODO add .ini

// 🐏 Imports

import * as OBC from './openbim-components-node.js'; // 🔥 Modified version that loads the Three.js library locally snd turns of the UiManager
import * as FS from 'fs';

//🐔 Setup Scene

const components = new OBC.Components();
components.scene = new OBC.SimpleScene(components);
const scene = components.scene.get();

//Prepare the ifc loader

let fragments = new OBC.FragmentManager(components);
let fragmentIfcLoader = new OBC.FragmentIfcLoader(components, fragments);
fragmentIfcLoader.settings.wasm = { path: "https://unpkg.com/web-ifc@0.0.43/", absolute: true }; //TODO make local
fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

// 🐒 Import

async function readFileAsUint8Array(filePath) {
    try {
        const buffer = await FS.promises.readFile(filePath);
        return new Uint8Array(buffer);
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}

const filePath = './models/Villa Savoye.ifc';
const buffer = await readFileAsUint8Array(filePath);
const model = await fragmentIfcLoader.load(buffer);
scene.add(model);

// 🐇 Export

async function exportFragments(fragments) {
    if (!fragments.groups.length) return;

    const group = fragments.groups[0];
    const data = fragments.export(group);
    const groupProperties = JSON.stringify(group.properties);

    try {
        await FS.promises.writeFile('model.frag', data);
        await FS.promises.writeFile('model.json', groupProperties);

        console.log('Files saved as model.frag and model.json');
    } catch (error) {
        console.error('Error writing files:', error);
    }
}

await exportFragments(fragments);

// 🐢 Dispose

fragments.dispose(); //TODO activate

// 🐍 Feedback message

console.log("🐍");