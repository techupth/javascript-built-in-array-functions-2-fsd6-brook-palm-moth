let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];
// Version 1
function searchCrimeRecord(name, crimeRecordNames) {
  // Start coding here
  if (crimeRecordNames.includes(name)) {
    return name + " has crime record !!!";
  } else {
    return name + " has no crime record";
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra", crimeRecordNames)); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno", crimeRecordNames)); //"Tinashe Benigno has crime record !!!"
