import { BankData } from "./module/bank-data/bank-data.mjs";
import { TableUtil } from "./module/table-util/table-util.util.mjs";

const bankData = BankData.getMockData();
const bankDataHeaders = BankData.getMockHeader();

document.getElementById("tableSlot").appendChild(TableUtil.makeTable(bankData, bankDataHeaders));