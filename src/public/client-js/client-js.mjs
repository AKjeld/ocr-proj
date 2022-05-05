import { BankData } from "./module/bank-data/bank-data.mjs";
import { TableUtil } from "./module/table-util/table-util.util.mjs";

function sendReq() {
    console.log("hello there");
}


const bankData = BankData.getMockData();
const bankDataHeaders = BankData.getMockHeader();

console.log(bankData);
document.getElementById("tableSlot").appendChild(TableUtil.makeTable(bankData, bankDataHeaders));