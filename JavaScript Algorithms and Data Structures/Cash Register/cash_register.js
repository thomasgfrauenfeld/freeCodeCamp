function checkCashRegister(price, cash, cid) {
    let amt_due = cash - price;
    let balance = 0;
    let cid_obj = {};
    let change_obj = {};
    const ref = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.10],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    for (let i = 0; i < cid.length; i++) {
        balance += Number(cid[i][1]);
        cid_obj[cid[i][0]] = cid[i][1];
    }

    balance = balance.toFixed(2);

    if (balance < amt_due) {
        return {"status": "INSUFFICIENT_FUNDS", "change": []};
    } else if (balance == amt_due) {
        return {"status": "CLOSED", "change": cid};
    } else {
        for (let i = 0; i < ref.length; i++) {
            while (amt_due >= ref[i][1] && cid_obj[ref[i][0]] > 0) {
                if (change_obj.hasOwnProperty(ref[i][0])) {
                    change_obj[ref[i][0]] += ref[i][1];
                } else {
                    change_obj[ref[i][0]] = ref[i][1];
                }
                cid_obj[ref[i][0]] -= ref[i][1];
                amt_due -= ref[i][1];
                amt_due = amt_due.toFixed(2);
                balance -= ref[i][1];
                balance = balance.toFixed(2);
            }
        }
    }

    if (amt_due > 0) {
        return {"status": "INSUFFICIENT_FUNDS", "change": []};
    }
    
    let change = [];
    for (let i = 0; i < ref.length; i++) {
        if (change_obj.hasOwnProperty(ref[i][0])) {
            change.push([ref[i][0], change_obj[ref[i][0]]]);
        }
    }

    return {"status": "OPEN", "change": change};
}