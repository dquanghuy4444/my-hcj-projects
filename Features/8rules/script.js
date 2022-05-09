var upper=50;
var lower=-50;
var average=(upper+lower)/2;
$("#divResult").hide();
//createInfoArea(upper,lower,average);
let inputList1=[50,49,33,0,-5,-6,22,34,-45,-55,-44,-23,9,0,51,0,0,0,6,7];
$("#listInput").val(inputList1);
$("#upperInput").val(upper);
$("#lowerInput").val(lower);

function createInfoArea(upper,lower,average,htmlTitle,htmlDescription,htmlSolution)
{
  $(".info").empty();
  $("#title").empty();
  $("#description").empty();
  $("#solution").empty();
  var html="";
  html+=`<p>Giới hạn trên:  <span class="upper"></span></p>`;
  html+=`<p>Giới hạn dưới:  <span class="lower"></span></p>`;
  html+=`<p>Gía trị trung bình:  <span class="average"></span></p>`;
  $(".info").append(html);
  $("#description").append(htmlDescription);
$("#solution").append(htmlSolution);
  $(".upper").text(upper);
$(".lower").text(lower);
$(".average").text(average);
$("#title").append(htmlTitle);

var standardDeviation=Math.ceil(Math.abs(upper-lower)/6);
$(".upperLevel1").text(average+standardDeviation);
$(".lowerLevel1").text(average-standardDeviation);
$(".upperLevel2").text(average+2*standardDeviation);
$(".lowerLevel2").text(average-2*standardDeviation);
}
function createSTT(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>STT</th>`;
  $.each(inputList,function(i,value)
  {
    html+=`<td>${i+1}</td>`
  })
  html+=`</tr>`;
  return html;
}

function createInputList(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>List input</th>`;
  $.each(inputList,function(i,value)
  {
    html+=`<td>${value}</td>`
  })
  html+=`</tr>`;
  return html;
}

function createOutputList(inputList)
{
  var html="";
  html+=`<tr>`;
  html+=`<th>List output</th>`;
  $.each(inputList,function(i,value)
  {
    html+=htmlTd.get(value);
    html+=value+`</td>`;
    // if(value===1)
    // {
    //   html+=`<td class="bg-warning">${value}</td>`
    // }
    // if(value===2)
    // {
    //   html+=`<td class="bg-danger">${value}</td>`
    // }
    // if(value===0)
    // {
    //   html+=`<td class="bg-primary">${value}</td>`
    // }
  })
  html+=`</tr>`;
  return html;
}
const htmlTd = new Map([
  [1,`<td class="bg-warning">`],
  [2,`<td class="bg-danger">`],
  [0,`<td class="bg-primary">`],
])
function createTableBody(id,inputList,outputList)
{
  $("#"+id).empty();
  $("#"+id).append(`<tbody>`);
  $("#"+id).append(createSTT(inputList));
  $("#"+id).append(createInputList(inputList));
  $("#"+id).append(createOutputList(outputList));
  $("#"+id).append(`</tbody>`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Rule1
function rule1(inputList,upper,lower)
{
    var _inputList=[];
    var indexTemp=-1;
    _inputList=inputList.slice();
    $.each(_inputList, function(index, value) {
        //_inputList[index]=(value>=upper||value<=lower)? 2:0
        if(value>=upper||value<=lower)
        {
          indexTemp=index;
          return false;
        }
      });
      $.each(_inputList, function(index, value) {
        _inputList[index]=0;
        if(index==indexTemp)
        {
          _inputList[index]=2; 
        }

      });
    return _inputList;
}





////////////////////////////////////////////////////////////////////////
var inputList2=[0,2,4,6,28,5,8,9,7,4,-44,-23,-9,-3,-12,-33,-9,-2,1,3];



//Rule2
function rule2(inputList,upper,lower,average)
{
    var countMinus=0;
    var countPlus=0;
    var listTemp=[];
    var index=-1;
    listTemp=inputList.slice();
    for(let i=0;i<listTemp.length;i++)
    {
      if(listTemp[i]>average&&listTemp[i]<upper)
      {
        countMinus=0;
        countPlus++;
      }
      else if(listTemp[i]>lower&&listTemp[i]<average)
      {
        countPlus=0;
        countMinus++;
      }
      if(countMinus==9||countPlus==9)
      {
        index=i;
        break;
      }     
    }
    for(let i=0;i<listTemp.length;i++)
    {
      listTemp[i]=getValueByIndex(i,index);

    }
    // $.each(_inputList, function(index, value) {
    //   if(value>average&&value<upper)
    //   {
    //     countMinus=0;
    //     countPlus++;
    //    _inputList[index] = outputRule2.get(countPlus) || outputRule2.get('default');
    //   }
    //   else if(value>lower&&value<average)
    //   {
    //     countPlus=0;
    //     countMinus++;
    //     _inputList[index] = outputRule2.get(countMinus) || outputRule2.get('default');

    //   }
    //   else if(value==average ||value>=upper||value<=lower)
    //   {
    //     countMinus=0;
    //     countPlus=0;
    //     _inputList[index]=0;
    //   }
    // });

    return listTemp;
}

var outputList2=rule2(inputList2,upper,lower,average);

//createTableBody("table2",inputList2,outputList2);
//////////////////////////////////////////////////////////////////

var inputList3=[49,46,33,21,20,15,8,6,7,8,-44,-23,-9,-3,-1,0,2,3,1,23];


//Rule3
var rule3=function(inputList,upper,lower)
{
    var countIncrease=0;
    var countDecrease=0;
    var index=-1;
    var listTemp=inputList.slice();

    for(let i=0;i<listTemp.length-1;i++)
    {
        if(listTemp[i]>listTemp[i+1])
        {
          countDecrease=0;
          countIncrease++;
        }
        else if(listTemp[i]<listTemp[i+1])
        {
          countIncrease=0;
          countDecrease++;
        }
        else
        {
          countDecrease=0;
          countIncrease=0;
        }
        if(countDecrease==6||countIncrease==6)
        {
          index=i+1;
          break;
        }
    }
    for(let i=0;i<listTemp.length;i++)
    {
      listTemp[i]=getValueByIndex(i,index);

    }

    return listTemp;
}

// var outputList3=rule3(inputList3,upper,lower);

// createTableBody("table3",inputList3,outputList3);


 var inputListOK=[49,46,33,21,20,15,18,6,-7,8,-44,-23,-9,-3,-1,0,-2,3,1,23];

 ////////////////////////////////////////////////////////
 var inputList4=[22,-33,-33,-16,-20,25,-18,6,-20,8,2,13,9,13,5,8,2,-5,12,22];

 //Rule4
 function rule4(inputList)
 {
  var listTemp=[];
  


  ///////////////////////////////
   var flag=0;
   var flagNG=0;
  var status=0;
  for(let i=0;i<7;i++)
  {
    var countIncrease=0;
    var countDecrease=0;
    var condition=0;
    listTemp=inputList.slice();
    for(let j=0;j<13;j++)
    {
      if(listTemp[i+j]==listTemp[i+j+1])
      {
        flag=0;
        break;
      }
      else if(listTemp[i+j]>listTemp[i+j+1])
      {
        countDecrease++;
        if(j==0)
        status=-1;
      }
      else if(listTemp[i+j]<listTemp[i+j+1])
      {
        countIncrease++;
        if(j==0)
        status=1;

      }
      condition=countIncrease-countDecrease;
      if(condition!=status&& condition!=0)
      {
        flag=0;
        break;
      }
      else if(condition==0||Math.abs(condition)==1)
      {
        flag=1;
        listTemp[i+j]=0;
        if((countDecrease==7 && countIncrease==6)||(countIncrease==7&& countDecrease==6))
        {
          listTemp[i+j]=1;
          for(let n=1;n<8-i;n++)
          {
            if(n==1)
            {
              listTemp[i+j+n]=2;
              flagNG=1;
            }

            else
            listTemp[i+j+n]=0;
          }
        }
      }
      else
      {
        flag=0;
        break;
      }
    }
    if(flagNG==1)
    break;
  }
  if(flag==0)
  {
    listTemp=inputList.slice();
    $.each(listTemp, function(index, value) {
      listTemp[index]=0;
    });
  }
for(let i=0;i<7;i++)
{
  listTemp[i]=0;
}
  return listTemp;
 }

 /////////////////////////////////////////////////////////////////////////////////

 var inputList5=[8,2,45,40,7,18,-12,-26,-33,20,-21,22,26,-22,18,2,13,-9,13,5];
 //Rule5
 function  rule5(inputList,upper,lower,average)
{
  var countPlus=0;
  var countMinus=0;
  var listTemp=[];
  var index=-1;
  listTemp=inputList.slice();
  var standardDeviation=(upper-average)/3;
  var above2=average+2*standardDeviation;
  var below2=average- 2*standardDeviation;
  for(let i=0;i<listTemp.length;i++)
  {

    if(listTemp[i]>above2&&listTemp[i]<upper)
    {
      countPlus++;
      countMinus=0;
    }
    else if(listTemp[i]<below2&&listTemp[i]>lower)
    {
      countMinus++;
      countPlus=0;
    }
    else
    {
      countMinus=0;
      countPlus=0;
    }
    if(countMinus==2||countPlus==2)
    {
      index=i;
      break;

    }
  }

  for(let i=0;i<listTemp.length;i++)
  {
    listTemp[i]=getValueByIndex(i,index);
  }
  
    return listTemp;
}

 /////////////////////////////////////////////////////////////////////////////
 var inputList6=[22,-33,-33,16,20,25,18,26,-20,8,2,13,-9,13,5,8,2,5,-12,22];

 //Rule6
 function rule6(inputList,upper,lower,average)
 {
   var countPlus=0;
   var countMinus=0;
   var listTemp=[];
   var index=-1;
   listTemp=inputList.slice();
   var standardDeviation=(upper-average)/3;
   var above=average+standardDeviation;
   var below=average- standardDeviation;
   for(let i=0;i<listTemp.length;i++)
   {
     if(listTemp[i]>above&& listTemp[i]<upper)
     {
       countPlus++;
       countMinus=0;
     }
     else if(listTemp[i]>lower&& listTemp[i]<below)
     {
      countMinus++;
       countPlus=0;
     }
     else{
       countMinus=0;
       countPlus=0;
     }
     if(countMinus==4||countPlus==4)
     {
       index=i;
       break;
     }
   }
  //  for (let i=0;i<listTemp.length-4;i++)
  //  {
  //   var countPlus=0;
  //   var countMinus=0;
  //    for(let j=0;j<5;j++)
  //    {
  //      valueTemp=listTemp[i+j]
  //      if(valueTemp>average && valueTemp<upper)
  //      {
  //        countPlus++;
  //        countMinus=0;
  //      }
  //      else if(valueTemp>lower && valueTemp<average)
  //      {
  //        countMinus++;
  //        countPlus=0;
  //      }
  //      if(valueTemp==lower||valueTemp==average||valueTemp==upper||(countMinus>0&&countPlus>0))
  //      {
  //        break;
  //      }
  //      if(countMinus==4||countPlus==4)
  //      {
  //        index=i+j;
  //        break;
  //      }      
  //    }
  //    if(index!=-1)
  //    {
  //      break;
  //    }
  //  }

   for(let i=0;i<listTemp.length;i++)
{
  listTemp[i]=getValueByIndex(i,index);
}

  return listTemp;
 }

 ///////////////////////////////////////////////////////////////
 var inputList7=[18,-12,-6,10,20,-2,-12,6,-2,8,2,13,-9,13,5,8,2,5,-12,7];
 //Rule7
 function rule7(inputList,upper,lower,average)
{
  var listTemp=[];
  var index=-1;
  var countMinus=0;
  var countPlus=0;
  listTemp=inputList.slice();
  var standardDeviation=(upper-average)/3;
  var above=average+standardDeviation;
  var below=average- standardDeviation;
  for(let i=0;i<listTemp.length;i++)
  {
    if(listTemp[i]>below&&listTemp[i]<average)
    {
      countMinus++;
    }
    else if(listTemp[i]>average&&listTemp[i]<above)
    {
      countPlus++;
    }
    else
    {
      countMinus=0;
      countPlus=0;
    }
    if(countMinus>0&&countPlus>0&&(countMinus+countPlus==15))
    {
      index=i;
      break;
    }
  }
  // for(let i=0;i<6;i++)
  // {
  //   var count=0;
  //   for(let j=0;j<15;j++)
  //   {
  //     if(listTemp[i+j]>below&&listTemp[i+j]<above)
  //     {
  //       count++;
  //     }
  //     else break;
  //   }
  //   if(count==15)
  //   {
  //     index=i+14;
  //     break;
  //   }
  // }

  for(let i=0;i<listTemp.length;i++)
  {
    listTemp[i]=getValueByIndex(i,index);
  }
  
    return listTemp;
}

 ///////////////////////////////////////////////////////////////
 var inputList8=[8,2,5,-12,7,18,-26,-12,-33,20,-21,22,26,-22,18,22,13,-9,13,5];
 //Rule8
 function  rule8(inputList,upper,lower,average)
{
  var listTemp=[];
  var index=-1;
  var countMinus=0;
  var countPlus=0;
  listTemp=inputList.slice();
  var standardDeviation=(upper-average)/3;
  var above=average+standardDeviation;
  var below=average- standardDeviation;
  for(let i=0;i<listTemp.length;i++)
  {
        if(listTemp[i]<=below)
        {
          countMinus++;
        }
        else if(listTemp[i]>=above)
        {
          countPlus++;
        }
        else
        {
          countMinus=0;
          countPlus=0;
        }
        if(countMinus>0&&countPlus>0&&(countMinus+countPlus==8))
        {
          index=i;
          break;
        }
  }
  // for(let i=0;i<13;i++)
  // {
  //   var count=0;
  //   for(let j=0;j<8;j++)
  //   {
  //     if(listTemp[i+j]<=below||listTemp[i+j]>=above)
  //     {
  //       count++;
  //     }
  //     else break;
  //   }
  //   if(count==8)
  //   {
  //     index=i+7;
  //     break;
  //   }
  // }

  for(let i=0;i<listTemp.length;i++)
  {
    listTemp[i]=getValueByIndex(i,index);
  }
  
    return listTemp;
}

 ///////////////////////////////////////////////////////////////




function getValueByIndex(i,index)
{
  var value=0;
  if(i==(index-1))value=1;
  else if(i==index)value=2;
  return value
}

// var strPerfectTime="0-15;1-21;2-27;3-33;4-39;5-45;6-51;7-57;8-63;9-69;10-75";
// var listPerfectTimeTemp = strPerfectTime.split(";");
// console.log(listPerfectTimeTemp);

// function getListFailTime(_listPerfectTimeTemp)
// {
//   var listFailTime='';
//   for(let i=0;i<_listPerfectTimeTemp.length;i++)
//   {
//     var item=_listPerfectTimeTemp[i];
//     var listTemp = item.split("-");
//     if(i===0)
//     {
//       listFailTime=listTemp[0];
//     }
//     else listFailTime+=","+listTemp[0];
//   }
//   return listFailTime;
// }

// function getListPerfectTime(_listPerfectTimeTemp)
// {
//   var listPerfectTime=[];
//   for(let i=0;i<_listPerfectTimeTemp.length;i++)
//   {
//     var item=_listPerfectTimeTemp[i];
//     var listTemp = item.split("-");
//     listPerfectTime.push(listTemp[1]);

//   }
//   return listPerfectTime;
// }

// var listFailTime=getListFailTime(listPerfectTimeTemp);
// console.log(listFailTime)
// var listPerfectTime=getListPerfectTime(listPerfectTimeTemp);
// console.log(listPerfectTime)



