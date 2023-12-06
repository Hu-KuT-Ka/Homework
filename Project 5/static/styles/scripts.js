console.log("Первое задание")
function LeapYear(year)
{
    if (year % 4 == 0) 
    {
        console.log(year," - високосный год, 366 дней")
    }
    else
    {
        console.log(year," - невисокосный год, 365 дней")
    }
}
LeapYear(2000)
LeapYear(2001)
LeapYear(2002)
LeapYear(2003)
LeapYear(2004)
LeapYear(2005)
console.log("")
console.log("Второе задание")
console.log("Часть А")
function MasSum(mas)
{
    console.log(mas, "Исходный массив");
    var size = mas.length;
    var first = 0;
    var second = 0;
    var sum=0;
    for (let i=0; i<size; i++)
    {
        if (Math.abs(Math.sqrt(parseFloat(mas[i]))-Math.cbrt(parseFloat(mas[i]))) <= 1e-5) 
        {
            first = i; break;
        } 
    }
    for (let i=size-1; i > -1; i--)
    {
        if (Math.abs(Math.sqrt(parseFloat(mas[i]))-Math.cbrt(parseFloat(mas[i]))) <= 1e-5) 
        {
            second = i; break;
        } 
    }
    if (first==second) 
    {
        console.log("Сумма не посчитана (условия не соблюдаются)")
    }
    else
    {
        for (let i=first+1; i < second; i++)
        {
            sum+=mas[i];
        }
    }
    console.log("Полученная сумма", sum);
}
var array = [1,2.3,-3.9,4,5,1];    
MasSum(array)

console.log("Часть B")
function MasDel(mas)
{
    console.log(mas, "Исходный массив");
    var size = mas.length;
    var newMas=[];
    for (let i=0; i<size; i++)
    {
        var integer = Math.trunc(mas[i]);
        var text = (Math.abs(integer)).toString();
        var count = 0;
        for (let j=0; j<text.length; j++)
        {
            count+=parseInt(text[j]);
        }
        if (count%2==1)
        {
            newMas.push(mas[i])
        }
    }
    console.log(newMas, "Массив после удаления элементов");
}
MasDel(array)
console.log("")
console.log("Четвертое задание")
function Split(str)
{
    console.log(str, "Исходная строка");
    console.log("Полученные элементы:");
    str=str.toString();
    var size = str.length;
    var count=0;
    strMin="";
    for (let i=0; i<size; i++)
    {
        strMin+=str[i];
        count+=1;
        if (count==3) {console.log(strMin); strMin="";count=0;}
    }
    if (count!=0) {console.log(strMin);}
}
Split("123qwe789lkjnfv1")

