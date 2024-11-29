import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    // car 1 details
    let carName1= "Toyota Cross"
    let carPrice1= "PKR 80.5 - 100.5 lacs"
    let carReview1= "500+ Reviews"
    let carImage1= "/images/toyota cross.jpg"

    // car 2 details
    let carName2= "Honda Civic"
    let carPrice2= "PKR 35.5 - 85.5 lacs"
    let carReview2= "300+ Reviews"
    let carImage2= "/images/Honda Civic.jpeg"

    // car 3 details
    let carName3= "Suzuki Vitara"
    let carPrice3= "PKR 40.5 - 45.5 lacs"
    let carReview3= "150+ Reviews"
    let carImage3= "/images/suzuki vitara.jpeg"

    // car 4 details
    let carName4= "Hyunda Sonata"
    let carPrice4= "PKR 99.95 - 112.200 lacs"
    let carReview4= "150+ Reviews"
    let carImage4= "/images/Hyundai Sonata.jpeg"


return (
    <div>
        <h1 className="text-center text-2xl border">Featured New cars with Props Components</h1>
    <div className="flex gap-10 justify-center flex-wrap">
       
        <ChildComponent 
        name = {carName1}
        price = {carPrice1}
        review = {carReview1}
        image= {carImage1}
        />
        <ChildComponent 
        name = {carName2}
        price = {carPrice2}
        review = {carReview2}
        image= {carImage2}
        />
        <ChildComponent 
        name = {carName3}
        price = {carPrice3}
        review = {carReview3}
        image = {carImage3}
        />
        <ChildComponent 
        name = {carName4}
        price = {carPrice4}
        review = {carReview4}
        image = {carImage4}
        />
    </div>
    </div>

)
}
export default ParentComponent