var sele = document.getElementById("sele").value; //獲取目標選擇器
var cmd_text = document.getElementById("cmd_text"); //獲取指令內容
var item_id = document.getElementById("item_id").value; //獲取物品名稱
var item_num = document.getElementById("item_num").value; //獲取物品數量
var itme_data = document.getElementById("item_data").value; //獲取物品數據值
//函式
function click_add(){ //生成按鈕的事件
    sele = document.getElementById("sele").value; //獲取目標選擇器
    cmd_text = document.getElementById("cmd_text"); //獲取指令內容
    item_id = document.getElementById("item_id").value; //獲取物品名稱
    item_num = document.getElementById("item_num").value; //獲取物品數量
    itme_data = document.getElementById("item_data").value; //獲取物品數據值
    nbt = new_nbt() //設定nbt為函式
}
//nbt
function new_nbt(){

}