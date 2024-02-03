//https://platform.thatopen.com/documentation

// 🐏 Imports

import * as THREE from 'three';
import * as OBC from 'openbim-components';

//Grab HTML container
const container = document.getElementById('container');

//Setup the basic scene
const components = new OBC.Components();
components.scene = new OBC.SimpleScene(components);
components.renderer = new OBC.SimpleRenderer(components, container);
components.camera = new OBC.OrthoPerspectiveCamera(components);
components.camera.controls.setLookAt(20, 20, 20, 0, 0, 0);
components.raycaster = new OBC.SimpleRaycaster(components);
components.init();
const scene = components.scene.get();
components.scene.setup();
scene.background = new THREE.Color(1, 1, 1);

//Add a grid
//const grid = new OBC.SimpleGrid(components);
//components.tools.add("grid", grid);


// 🐒 Import

let fragments = new OBC.FragmentManager(components);
//let fragmentIfcLoader = new OBC.FragmentIfcLoader(components, fragments);
//fragmentIfcLoader.settings.wasm = { path: "https://unpkg.com/web-ifc@0.0.43/", absolute: true };
//fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
//fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

//const ifcImportButton = fragmentIfcLoader.uiElement.get("main");

const file = await fetch("./assets/model.frag");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await fragments.load(buffer);
//const properties = await fetch("./assets/model.json");
//model.properties = await properties.json();


// GLobal variables
let idCounter = 0;
let maxIdCounter = Object.keys(model.items);

// Materials
const basicMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.5, 0.5, 0.5),  // Set the color of the material
    transparent: true, // Enable transparency
    opacity: 0.2       // Set the opacity (0.0 to 1.0, where 0 is fully transparent and 1 is fully opaque)
});

const wireFrameMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0.5, 0.5, 0.5),  // Set the color of the material
    wireframe: true,
    // Optionally, you can set the wireframe line width
    wireframeLinewidth: 0.2,
    transparent: true, // Enable transparency
    opacity: 0.2       // Set the opacity (0.0 to 1.0, where 0 is fully transparent and 1 is fully opaque)
});

const highlightMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0, 0, 0)  // Set the color of the material
});

const setAllMaterials = (material) => {
    for (let key in Object.keys(model.items)) {
        if (model.items.hasOwnProperty(key) == false) continue;
        const item = model.items[key];
        item.mesh.material = material;
    }
}

const setIdMaterials = (material, id) => {
    let count = 0;
    for (let key in Object.keys(model.items)) {
        if(model.items.hasOwnProperty(key) == false) continue;
        const item = model.items[key];
        if(count != id) {count ++; continue;}
        count ++;
        console.log(item);
        item.mesh.material = material;
    }
}

// Zoom
const fragmentBbox = new OBC.FragmentBoundingBox(components);
fragmentBbox.add(model);
const bbox = fragmentBbox.getMesh();
fragmentBbox.reset();
const controls = components.camera.controls;

const zoomToFit = () => controls.fitToSphere(bbox, true);
zoomToFit();

// 🐇 Export

/*const exportFragments = async () => {
    if (!fragments.groups.length) return;
    const group = fragments.groups[0];
    const data = fragments.export(group);
    const blob = new Blob([data]);
    const fragmentFile = new File([blob], 'model.frag'); //TODO generate name
    const files = [];
    files.push(fragmentFile);
    files.push(new File([JSON.stringify(group.properties)], 'model.json')); //TODO generate name
    const result = await downloadZip(files).blob();
    result.name = 'example'; //TODO generate name
    download(result);
}*/

/*const download = (file) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
}*/

// 🐢 Dispose

const disposeFragments = () => {
    fragments.dispose();
}

// 🐍 Toolbar

const getToolbar = (components, name) => {
    const toolbar = new OBC.Toolbar(components)
    toolbar.name = name;
    components.ui.addToolbar(toolbar);
    return toolbar;
}

const getButton = (components, toolbar, materialIcon, tooltip, onClickFunction) => {
    const button = new OBC.Button(components);
    button.materialIcon = materialIcon;
    button.tooltip = tooltip;
    button.onClick.add(onClickFunction);
    toolbar.addChild(button);
    return button;
}

const getButtonFromButton = (components, toolbar, materialIcon, tooltip, oldButton) => {
    const button = new OBC.Button(components);
    button.materialIcon = materialIcon;
    button.tooltip = tooltip;
    button.onClick = oldButton.onClick;
    toolbar.addChild(button);
    return button;
}

const paintMaterials = () => {
    setAllMaterials(wireFrameMaterial);
    setIdMaterials(highlightMaterial, idCounter);
}


const paintNextId = () => 
{
    idCounter++;
    if(idCounter > maxIdCounter)idCounter = 0;
    paintMaterials();
    //TODO add max cap
}

paintMaterials();

const toolbar = getToolbar(components, "Main Toolbar");
const acceptButton = getButton(components, toolbar, "task_alt", "This is a balcony", paintNextId);
const declineButton = getButton(components, toolbar, "dangerous", "This is not a balcony", paintNextId);
const zoomButton = getButton(components, toolbar, "zoom_in_map", "Zoom to Fit", zoomToFit);

//const uploadButton = getButtonFromButton(components, toolbar, "upload", "Upload .ifc", ifcImportButton);
//const downloadButton = getButton(components, toolbar, "download", "Download .frag and .json", exportFragments);
//const resetButton = getButton(components, toolbar, "restart_alt", "Reset", disposeFragments)
