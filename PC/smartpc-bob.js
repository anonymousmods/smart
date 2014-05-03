var iron = ["iron_block",0];
var ob = ["obsidian",0];

Block.defineBlock(23, "TV", iron, 0, false, 101);

Block.defineBlock(25, "Screen", ob, 0, false, 101);

Block.defineBlock(26, "Keyboard", iron, 0, false, 103);

Block.defineBlock(27, "PC", iron, 0, false, 102);

Block.defineBlock(28, "Stand", iron, 0, false, 101);

Block.setDestroyTime(23, 0.05);
Block.setDestroyTime(25,0.05);
Block.setDestroyTime(26, 0.05);
Block.setDestroyTime(27, 0.05);
Block.setDestroyTime(28, 0.05);

function renderBlockHook(blockId, x, y, z){

if(Block.getRenderType(blockId) == 101) {
renderTV(x, y, z);
}

if(Block.getRenderType(blockId) == 102) {
renderPC(x, y, z);
}

if(Block.getRenderType(blockId) == 103) {
renderKeyBoard(x, y, z);
}

}

function renderTV(x,y,z){
Block.setShape(23,-0.27,0.3,0,1.3,1.5,0.13);
BlockRenderer.renderBlock(23,x,y,z);

Block.setShape(25,-0.06,0.49,-0.05,1.1,1.33,0.11);
BlockRenderer.renderBlock(25,x,y,z);

Block.setShape(28,0.75,0,0,0.2,0.50,0.2);
//BlockRenderer.renderBlock(28,x,y,z);
}

function renderPC(x,y,z){

Block.setShape(27,0,0,0,0.6,0.3,0.6);
BlockRenderer.renderBlock(27,x,y,z);

}

function renderKeyBoard(x,y,z){

Block.setShape(26,0,0,0,1.4,0.09,0.6);
BlockRenderer.renderBlock(26,x,y,z);

}
