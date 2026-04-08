const employeeData={
    name:"subhash",
    age:28,
    department:"React Developer Engineer",
    details:{
        salary:50000,
        experience:5,
        monthly:'90 k per month',
        savings:'35 k'
    },
    address:[{
        place:'Guntur',
        street:'NTR colony',
        house_no:'0902'
    }]
}
console.log(employeeData);
console.log(employeeData.name);
console.log(employeeData.details.salary);
console.log(employeeData.address[0].place);

employeeData.details.salary=60000;


employeeData.address[0].place='Hyderabad';
console.log(employeeData.address[0].place);

console.log(employeeData.address[0].place);
