let monitoringDeviceExport=require("./monitoringDevice");
function displayAgent(moduleRef,touch,size){
    var _touch=touch;
    var _size=size;
    moduleRef.displayDevicesFun=(function(){
        monitoringDeviceExport.result(_touch,_size);
    })();
}
module.exports={display:displayAgent};