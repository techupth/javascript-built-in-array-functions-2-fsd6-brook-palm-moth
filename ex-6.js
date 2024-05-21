const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if(carCollection.includes(carBrand)){
    return carBrand + " already exists in position" + (carCollection.indexOf(carBrand) + 1) + "of the car collection"
  }else {
    return "New car collection is: " + carCollection.join(", ") + ", " + carBrand ;
  }
}



//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.
console.log(updateCarCollection("benz"));


//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
console.log(updateCarCollection("fiat"));