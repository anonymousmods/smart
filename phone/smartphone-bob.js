var Runnable = java.lang.Runnable;
var PopupWindow = android.widget.PopupWindow;
var Button = android.widget.Button; 
var Widget = android.widget;
var LinearLayout = Widget.LinearLayout;
var RelativeLayout = Widget.RelativeLayout;
var ViewGroup = android.view.ViewGroup;
var Gravity = android.view.Gravity;
var View = android.view.View;
var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var String = java.lang.String;
var Environment = android.os.Environment;
var BufferedReader = IO.BufferedReader;
var FileReader = IO.FileReader;
var StringBuilder = java.lang.StringBuilder;
var Dialog = android.app.Dialog; 
var ScrollView = android.widget.ScrollView;
var EditText = Widget.EditText;
var ImageView = android.widget.ImageView;
var number = android.text.InputType.TYPE_CLASS_NUMBER;

var phone;
var screen;
var message;
var call;
var people;
var browser;
var map;
var gps;
var settings;
var run = 1;
var onrun = false;
var plz=0;
var plz=0;
var plxdiff=0;
var plzdiff=0;
var camla;
var camdi;
var person;
var personname;
var prsnx;
var prsny;
var prsnz;
var URL = "http://www.google.com" ;
var rotation = 0;

var GUI = new Widget.PopupWindow();

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var layout = new LinearLayout(ctx);

ModPE.setItem(511,"record_strad",0,"Phone");

function createModPEDir(){

var sdcard = Environment.getExternalStorageDirectory();
var mcpeDir = new java.io.File(sdcard.getAbsolutePath(), "games/com.mojang/");
var modpe = new java.io.File(mcpeDir, "Smart/");
sgDir = new java.io.File(modpe, "Phone/");
sgDir.mkdirs();

}

var Option = {NAME: "name"};

function getOptionAttr(attr){

var sdcard = Environment.getExternalStorageDirectory();
var mcpeDir = new java.io.File(sdcard.getAbsolutePath(), "games/com.mojang/");
var optionsDir = new java.io.File(mcpeDir, "minecraftpe/");
var optionsFile = new java.io.File(optionsDir, "options.txt");
var br = new java.io.BufferedReader(new java.io.FileReader(optionsFile));
var str, prop;
var ln = new Array();

while((str = br.readLine()) != null){

ln.push(str);

}

i = ln.join().replace(",", ":");
prop = i.split(":");

return prop[prop.indexOf(attr) + 1];

}

createModPEDir();

Player.getHealth = function(){

Entity.getHealth(Player.getEntity());

}

function newLevel(){
clientMessage("You have 0 messages");

if(Level.getGameMode()==1){

}

ctx.runOnUiThread(new Runnable(){
run: function(){
try{

}catch(e){
print("Error: " + e);
}
}
});
}

function phonemenu(){
ctx.runOnUiThread(new Runnable(){
run: function(){
try{

var screen = new LinearLayout(ctx);
var scroll = new ScrollView(ctx);

screen.setOrientation(LinearLayout.VERTICAL);

scroll.addView(screen);

var dialog = new Dialog(ctx);
dialog.setContentView(scroll);
dialog.setTitle("Phone");

var message = new Button(ctx);
var call = new Button(ctx);
var people = new Button(ctx);
var camera = new Button(ctx);
var browser = new Button(ctx);
var settings = new Button(ctx);
var map = new Button(ctx);
var gps = new Button(ctx);
                
message.setText("Message");
call.setText("Phone");
people.setText("Contacts");
camera.setText("Camera");
browser.setText("Browser");
settings.setText("Setting");
map.setText("Maps");
gps.setText("GPS"); 
            
//screen.addView(message);
//screen.addView(call);
screen.addView(people);
screen.addView(camera);
screen.addView(gps);
screen.addView(map);
screen.addView(browser);
screen.addView(settings);
        
dialog.show()

map.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
}
});

gps.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
}
});

message.setOnClickListener(new View.OnClickListener(){
onClick: function(){

var sendmsg = new Button(ctx);

sendmsg.setText("Send");

var inputmsg = new EditText(ctx);

inputmsg.setHint("Message");

var msgform = new LinearLayout(ctx);
var promptmsg = new Dialog(ctx);

msgform.setOrientation(android.widget.LinearLayout.VERTICAL);
msgform.setBackgroundDrawable(null);

msgform.addView(inputmsg);
msgform.addView(sendmsg);

promptmsg.setContentView(msgform);
promptmsg.setTitle("Send Message");

sendmsg.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sendmsg.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

inputmsg.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
inputmsg.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

promptmsg.show()
dialog.dismiss();
sendmsg.setOnClickListener(new View.OnClickListener(){
onClick: function(){
var playername = Player.getName(Player.getEntity());
clientMessage("<"+playername+"> "+ inputmsg.getText());
promptmsg.dismiss();
}
});
}
});

call.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();

}
});

people.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
peopleon()
}
});

camera.setOnClickListener(new View.OnClickListener(){
onClick: function(){
cameraon()
dialog.dismiss();
}
});

browser.setOnClickListener(new View.OnClickListener(){
onClick: function() {
browsermenu()
dialog.dismiss();
}
});

settings.setOnClickListener(new View.OnClickListener(){
onClick: function(){
gamesettings()
dialog.dismiss();
}
});

}catch(e){
print("Error: " + e);        
}
}
});
}

function leaveGame(){

onrun=false;
run = 1;

ctx.runOnUiThread(new java.lang.Runnable(){

run: function(){

if(GUI != null){

GUI.dismiss();

}

}

});

}

function datavaluesshow(){
ctx.runOnUiThread(new Runnable(){

run: function(){
try{

var refWV = new android.webkit.WebView(ctx);
var refWVSettings = refWV.getSettings();

refWVSettings.setJavaScriptEnabled(true);
refWV.setWebChromeClient(new android.webkit.WebChromeClient());
refWV.setWebViewClient(new android.webkit.WebViewClient());
url = "http://minecraft.gamepedia.com/Data_values_(Pocket_Edition)";

refWV.loadUrl(url);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(url);
b.setView(refWV);
b.setNegativeButton("Close",new DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();

} catch(err){
print("Cannot open window: "+err+".")
;
}
}
});
}

function browsermenu(){

ctx.runOnUiThread(new Runnable({

run: function(){
try{
var wwv=new android.webkit.WebView(ctx);
var wS=wwv.getSettings();

wS.setJavaScriptEnabled(true);
wwv.setWebChromeClient(new android.webkit.WebChromeClient());
wwv.setWebViewClient(new android.webkit.WebViewClient());

wwv.loadUrl(URL);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(URL);
b.setView(wwv);
b.setNegativeButton("Close",new android.content.DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();
}catch(err){
print("Cannot open window: "+err+".")
;
}
}}));
}

function gamesettings(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{

var stla = new LinearLayout(ctx);
var stdi = new Dialog(ctx);
var gm = new Button(ctx);
var dn = new Button(ctx);
var sprint = new Button(ctx);
var heal = new Button(ctx);
var tmi = new Button(ctx);
var scroll = ScrollView(ctx);

stla.setOrientation(LinearLayout.VERTICAL);

scroll.addView(stla);

stla.addView(gm);
stla.addView(dn);
stla.addView(sprint);
stla.addView(heal);
stla.addView(tmi);

gm.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
gm.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

dn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
dn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

sprint.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sprint.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

heal.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
heal.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

tmi.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
tmi.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

stdi.setContentView(scroll);
stdi.setTitle("Game Settings");

stdi.show()

if(Level.getGameMode()==0){
gm.setText("Survival");
} else if(Level.getGameMode()==1){
gm.setText("Creative");
}

var ltime = Level.getTime()-Math.floor(Level.getTime()/19200)*19200;
day = ltime < (19200/2);
night = day?0:8280;

if(day){
dn.setText("Day");
} else {
dn.setText("Night");
}

if(onrun==false){
sprint.setText("Sprint Off");
} else if(onrun==true){
sprint.setText("Sprint On");
}

heal.setText("Heal");

tmi.setText("Too many items");

if(Level.getGameMode()==0){
gm.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(1);
clientMessage("GameMode set to Creative");
stdi.dismiss();
}
});
} else if(Level.getGameMode()==1){
gm.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(0);
clientMessage("GameMode set to Survival");
stdi.dismiss();
}
});
}

if(day){
dn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Night");
Level.setTime(14000);
stdi.dismiss();
}
});
} else if(!day){
dn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Day");
stdi.dismiss();
Level.setTime(0);
}
});
}

if(onrun==false){
sprint.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Sprinting on");
onrun=true;
stdi.dismiss();
}
});
} else if(onrun==true){
sprint.setOnClickListener(new View.OnClickListener(){
onClick: function(){
onrun=false;
clientMessage("Sprinting off");
stdi.dismiss();
}
});
}

heal.setOnClickListener(new View.OnClickListener({
onClick: function() {
Player.setHealth(20);
stdi.dismiss();
clientMessage("Fully Healed");
}
}));

tmi.setOnClickListener(new View.OnClickListener(){
onClick: function(){
tmion()
stdi.dismiss();
}
});

} catch(e){
print("Error: " + e);
}

}
});

}

function cameraon(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{
var camla = new LinearLayout(ctx);
var camdi = new Dialog(ctx);
var selfie = new Button(ctx);
var picture = new Button(ctx);
var close = new Button(ctx);
var scroll = new ScrollView(ctx);

camdi.setTitle("Camera");
camla.setOrientation(LinearLayout.VERTICAL);

camla.addView(selfie);
camla.addView(picture);
camla.addView(close);

scroll.addView(camla);

selfie.setText("Selfie");
picture.setText("Picture");
close.setText("Close");

selfie.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
selfie.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

picture.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
picture.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

close.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
close.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

camdi.setContentView(scroll);
camdi.show()

selfie.setOnClickListener(new View.OnClickListener(){
onClick: function(){
takeselfie()
clientMessage("Now click with the phone on the blocks in Third Person View to take selfies");
camdi.dismiss();
}
});

picture.setOnClickListener(new View.OnClickListener(){
onClick: function(){
takephoto()
camdi.dismiss();
}
});

close.setOnClickListener(new View.OnClickListener(){
onClick: function(){
camdi.dismiss();
}
});

} catch(e){
print("Error: " + e);
}
}
});

}

function peopleon(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{
var pplfrm = new LinearLayout(ctx);
var pplshow = new Dialog(ctx);
var persontag = new Button(ctx);
var scroll = ScrollView(ctx);

pplfrm.setOrientation(LinearLayout.VERTICAL);
pplfrm.setBackgroundDrawable(null);

pplfrm.addView(persontag);

scroll.addView(pplfrm);

pplshow.setTitle("People You Know");
pplshow.setContentView(scroll);
pplshow.show()

if(Player.isPlayer(Player.getEntity())){
person = Player.getEntity();
personname = Player.getName(person);
prsnx = Player.getX();
prsny = Player.getY()
prsnz = Player.getZ();
}

persontag.setText("" + personname);

persontag.setOnClickListener(new View.OnClickListener(){
onClick: function(){
teleport()
}
});

} catch(e){
print("Error: " + e);
}
}
});
}

function teleport(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{
setPosition(Player.getEntity(), prsnx, prsny, prsnz);
clientMessage("Teleported " + getOptionAttr("mp_username") + " to " + personname);
} catch(e){
print("Error: " + e);
}
}
});
}

function takephoto(){
ModPE.takeScreenshot("Photo");
clientMessage("Photo Taken");
}

function useItem(x, y, z, itemId, blockId){
if(itemId==511){
function takeselfie(){
setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation = 1;
}
}
}

function tmion(){

ctx.runOnUiThread(new Runnable(){

run: function(){

try{

var tmiLayout = new LinearLayout(ctx);
var id = new EditText(ctx);
var amount = new EditText(ctx);
var data = new EditText(ctx);
var add = new android.widget.Button(ctx);
var ref = new Button(ctx);

add.setText("Add Item");
ref.setText("ID Reference");
id.setHint("Item ID");
amount.setHint("Amount");
data.setHint("Data/Damage");
data.setText("0");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.setBackgroundDrawable(null);

tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);
tmiLayout.addView(ref);

id.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
id.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

amount.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
amount.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

id.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
data.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

add.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
add.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

ref.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
ref.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

var tmiDialog = new Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("TooManyItems");

tmiDialog.show()

add.setOnClickListener(new View.OnClickListener(){

onClick: function(){

var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){

itemId = "0";

}

if(iData == null){

iData = "0";

}

Player.addItemInventory(itemId, iAmount, iData);

if(Level.getGameMode() == 1){

Entity.setCarriedItem(getPlayerEnt(), itemId, iAmount, iData);

}

tmiDialog.dismiss();

}

});

ref.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(){

datavaluesshow()
tmiDialog.dismiss();

}

});

}catch(e){
print("Error: " + e);        
}
}
});
}

function modTick(){

if(rotation==1){
//setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation=2;
}
if(rotation==2){
rotation=3;
}
if(rotation==3){
setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation=4;
}
if(rotation==4){
rotation=5;
}
if(rotation==5){
//setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
clientMessage("Selfie Taken");
rotation = 0;
ModPE.takeScreenshot("Selfie");
}

if(getCarriedItem()==511 || Level.getGameMode()==1){
ctx.runOnUiThread(new Runnable(){
run: function(){        
try{    

var layout = new LinearLayout(ctx);
var phone = new Button(ctx);
phone.setText("Phone");
phone.setGravity(Gravity.TOP | Gravity.LEFT);

phone.setOnClickListener(new View.OnClickListener(){
onClick: function(){
phonemenu()
//clientMessage("Phone Unlocked");
}
});    

layout.setOrientation(LinearLayout.VERTICAL);
layout.addView(phone);
GUI.setContentView(layout);
GUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | Gravity.RIGHT, 130, 0); 
        
}catch(e){
print("Error: " + e);    
}
}
});    
} else if(getCarriedItem!==511){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
if(GUI != null){
GUI.dismiss();
}
}
});
}

if(onrun==true){
if(run==1){
plx=getPlayerX();
plz=getPlayerZ();
run = run + 1;
}
else if(run==3){
run=1;
plxdiff=getPlayerX()-plx;
plzdiff=getPlayerZ()-plz;
setVelX(getPlayerEnt(),plxdiff);
setVelZ(getPlayerEnt(),plzdiff);
plxdiff=0;
plzdiff=0;
}
if(run!=1){
run = run + 1;
}

}else if(onrun==false){

return null;
}

}
