var _upper;
var _lower;
var _average;
var _inputListTemp;
var _inputList;
var _outputList;
let action;
var flag;
function getValueInTextBox()
{
    _upper=parseInt($("#upperInput").val());
    _lower=parseInt($("#lowerInput").val());
    _average=(_upper+_lower)/2;
    _inputListTemp=$("#listInput").val();
    _inputList = Array.from(_inputListTemp.split(','),Number);
}

function addEffect(_outputList)
{
    $.each(_outputList,function(i,value)
    {
    if(value===2)
    {
        //flag=0;
        addWarning();
        return false;
    }
    else
    {
    
        $('body').removeClass("warning");
    }
    });
}

/////////////////////////

///////////////////////////////////////////////////
$("#btnRule1").click(
    function()
{
    // var _upper=parseInt($("#upperInput").val());
    // var _lower=parseInt($("#lowerInput").val());
    // var _average=(_upper+_lower)/2;
    // var _inputListTemp=$("#listInput").val();
    // var _inputList = Array.from(_inputListTemp.split(','),Number);
    getValueInTextBox();
    _outputList=rule1(_inputList,_upper,_lower);
    funcRule1();

})


function funcRule1()
{
    addEffect(_outputList);
    var htmlTitle="Rule 1";
var htmlDescription=`Rule 1: Giá trị trong list nằm ngoài khoảng (<span class="lower"></span>, <span class="upper"></span>).`;
var htmlSolution=`Cách làm:`;
htmlSolution+=`<br>Tạo vòng for, check từng phẩn tử, nếu phần từ nào lớn hơn hoặc bằng giới hạn trên, hoặc bé hơn hoặc bằng giới hạn dưới thì phần tử đó là NG. `
    createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
  createTableBody("table",_inputList,_outputList);
  $("#divResult").css("display", "block");
  $("#labelWarning").empty();
  $("#imgRule").attr("src","image\\Rule1.png");
}
/////////////////////////////////////////////////
$("#btnRule2").click(
    function()
{
    getValueInTextBox();
  _outputList=rule2(_inputList,_upper,_lower,_average);
  addEffect(_outputList);
  funcRule2();
})

function funcRule2()
{
    addEffect(_outputList);
    var htmlTitle="Rule 2";
    var htmlDescription=`Rule 2: Có 9 giá trị hoặc nhiều hơn liên tiếp nhau nằm cùng  khoảng từ (<span class="average"></span>, <span class="upper"></span>) hoặc (<span class="lower"></span>, <span class="average"></span>).`;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countPlus, countMinus, index, listTemp`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần từ nằm trong khoảng (<span class="average"></span>, <span class="upper"></span>) thì ta cho countPlus++, countMinus= 0.`;
    htmlSolution+=`<br>Nếu phần từ nằm trong khoảng (<span class="lower"></span>, <span class="average"></span>) thì ta cho countMinus++, countPlus= 0.`;
    htmlSolution+=`<br>Ta bắt trường hợp nếu countPlus= 9 hoặc countMinus= 9, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`;
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule2.png");
}


///////////////////////////////
$("#btnRule3").click(
    function huy()
{
    getValueInTextBox();
  _outputList=rule3(_inputList,_upper,_lower);
  addEffect(_outputList);
  funcRule3();
})


function funcRule3()
{
    addEffect(_outputList);
    var htmlTitle="Rule 3";
    var htmlDescription=`Rule 3: Có 6 giá trị hoặc nhiều hơn liên tiếp nhau đang có xu hướng tăng hoặc giảm`;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countIncrease, countDecrease, index`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần từ i bé hơn phần tử i+1, ta cho countIncrease= 0, countDecrease++.`;
    htmlSolution+=`<br>Nếu phần từ i lớn hơn phần tử i+1, ta cho countDecrease= 0, countIncrease++.`;
       htmlSolution+=`<br>Ta bắt trường hợp nếu countIncrease= 6 hoặc countDecrease= 6, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`; 
         createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule3.png");
}
//////////////////////////////

///////////////////////////////
$("#btnRule4").click(
    function()
{
    getValueInTextBox();
  _outputList=rule4(_inputList);
  addEffect(_outputList);
  funcRule4();
})


function funcRule4()
{
    addEffect(_outputList);
    var htmlTitle="Rule 4";
    var htmlDescription=`Rule 4: Có 14 giá hoặc nhiều hơn có xu hướng tăng , giảm liên tục và ngược lại`;
    var htmlSolution=`Cách làm:...`;
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule4.png");
}
//////////////////////////////


$("#btnRule5").click(
    function()
{
    getValueInTextBox();
  _outputList=rule5(_inputList,_upper,_lower,_average);
  addEffect(_outputList);
  funcRule5();
})


function funcRule5()
{
    addEffect(_outputList);
    var htmlTitle="Rule 5";
    var htmlDescription=`Rule 5: Có 2 giá trị liên tiếp ở cùng 1 phía nằm trong  mức 3 (<span class="upperLevel2"></span>, <span class="upper"></span>) của khoảng (<span class="average"></span>, <span class="upper"></span>) hoặc mức 3 (<span class="lower"></span>, <span class="lowerLevel2"></span>) của khoảng (<span class="lower"></span>, <span class="average"></span>).`;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countMinus, countPlus, index, standardDeviation, above2, below2.`;
    htmlSolution+=`<br>standardDeviation=(upper- average)/3 hoặc bằng (average- lower)/ 3.`;
    htmlSolution+=`<br>above2= average+ 2* standardDeviation.`;
    htmlSolution+=`<br>below2= average- 2* standardDeviation.`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn above2 và bé hơn upper, ta cho countPlus++, countMinus=0.`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn lower và bé hơn below2, ta cho countMinus++, countPlus=0.`;
    htmlSolution+=`<br>Ngoài 2 trường hợp trên thì ta cho countPlus=0 và countMinus=0.`;
    htmlSolution+=`<br>Ta bắt trường hợp nếu countPlus= 2 hoặc countMinus= 2, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`; 
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule5.png");
}
//////////////////////////////

$("#btnRule6").click(
    function()
{
    getValueInTextBox();
  _outputList=rule6(_inputList,_upper,_lower,_average);
  addEffect(_outputList);
  funcRule6();
})


function funcRule6()
{
    addEffect(_outputList);
    var htmlTitle="Rule 6";
    var htmlDescription=`Rule 6: Có 4 giá trị liên tiếp ở cùng 1 phía không nằm trong mức 1 (<span class="average"></span>, <span class="upperLevel1"></span>) của khoảng (<span class="average"></span>, <span class="upper"></span>) hoặc mức 1 (<span class="lowerLevel1"></span>, <span class="average"></span>) của khoảng (<span class="lower"></span>, <span class="average"></span>) `;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countMinus, countPlus, index, standardDeviation, above, below.`;
    htmlSolution+=`<br>standardDeviation=(upper- average)/3 hoặc bằng (average- lower)/ 3.`;
    htmlSolution+=`<br>above= average+ standardDeviation.`;
    htmlSolution+=`<br>below= average- standardDeviation.`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn above và bé hơn upper, ta cho countPlus++, countMinus=0.`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn lower và bé hơn below, ta cho countMinus++, countPlus=0.`;
    htmlSolution+=`<br>Ngoài 2 trường hợp trên thì ta cho countPlus=0 và countMinus=0.`;
    htmlSolution+=`<br>Ta bắt trường hợp nếu countPlus= 4 hoặc countMinus= 4, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`; 
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule6.png");
}
//////////////////////////////


$("#btnRule7").click(
    function()
{
    getValueInTextBox();
  _outputList=rule7(_inputList,_upper,_lower,_average);
  addEffect(_outputList);
  funcRule7();
})


function funcRule7()
{
    addEffect(_outputList);
    var htmlTitle="Rule 7";
    var htmlDescription=`Rule 7: Có 15 giá trị liên tiếp ở cả 2 phía nằm trong mức 1 (<span class="average"></span>, <span class="upperLevel1"></span>) của khoảng (<span class="average"></span>, <span class="upper"></span>) và mức 1 (<span class="lowerLevel1"></span>, <span class="average"></span>) của khoảng (<span class="lower"></span>, <span class="average"></span>) `;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countMinus, countPlus, index, standardDeviation, above, below.`;
    htmlSolution+=`<br>standardDeviation=(upper- average)/3 hoặc bằng (average- lower)/ 3.`;
    htmlSolution+=`<br>above= average+ standardDeviation.`;
    htmlSolution+=`<br>below= average- standardDeviation.`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần tử i bé hơn above và lớn hơn average, ta cho countPlus++ .`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn below và bé hơn average, ta cho countMinus++ .`;
    htmlSolution+=`<br>Ngoài 2 trường hợp trên thì ta cho countPlus=0 và countMinus=0.`;
    htmlSolution+=`<br>Ta bắt trường hợp nếu countPlus>0, countMinus>0 và countMinus+countPlus=15, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`; 
  
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule7.png");
}
//////////////////////////////


$("#btnRule8").click(
    function()
{
    getValueInTextBox();
  _outputList=rule8(_inputList,_upper,_lower,_average);
  addEffect(_outputList);
  funcRule8();
})


function funcRule8()
{
    addEffect(_outputList);
    var htmlTitle="Rule 8";
    var htmlDescription=`Rule 8: Có 8 giá trị liên tiếp  ở cả 2 phía không nằm trong mức 1 (<span class="average"></span>, <span class="upperLevel1"></span>) của khoảng (<span class="average"></span>, <span class="upper"></span>) và mức 1 (<span class="lowerLevel1"></span>, <span class="average"></span>) của khoảng (<span class="lower"></span>, <span class="average"></span>) `;
    var htmlSolution=`Cách làm:`;
    htmlSolution+=`<br>Tạo các biến countMinus, countPlus, index, standardDeviation, above, below.`;
    htmlSolution+=`<br>standardDeviation=(upper- average)/3 hoặc bằng (average- lower)/ 3.`;
    htmlSolution+=`<br>above= average+ standardDeviation.`;
    htmlSolution+=`<br>below= average- standardDeviation.`;
    htmlSolution+=`<br>Tạo vòng for, check từng phần từ.`;
    htmlSolution+=`<br>Nếu phần tử i lớn hơn hoặc bằng above, ta cho countPlus++ .`;
    htmlSolution+=`<br>Nếu phần tử i bé hơn hoăc bằng below , ta cho countMinus++ .`;
    htmlSolution+=`<br>Ngoài 2 trường hợp trên thì ta cho countPlus=0 và countMinus=0.`;
    htmlSolution+=`<br>Ta bắt trường hợp nếu countPlus>0, countMinus>0 và countMinus+countPlus=8, ta sẽ gắn index bằng i hiện tại và break for loop`;
    htmlSolution+=`<br>Tạo vòng for, gắn từng phần từ  bằng hàm getValueByIndex(i, index) để tạo ra list output.`; 
  
        createInfoArea(_upper,_lower,_average,htmlTitle,htmlDescription,htmlSolution);
        createTableBody("table",_inputList,_outputList);
        $("#divResult").css("display", "block");
        $("#labelWarning").empty();
        $("#imgRule").attr("src","image\\Rule8.png");
}
//////////////////////////////


$("#btnAllRule").click(
    function()
{
    getValueInTextBox();
    var flag=0;

    if(flag==0)
    {
        _outputList=rule1(_inputList,_upper,_lower);
        $.each(_outputList, function(index, value) {
        if(value==2)
        {
            flag=1;
            return false;
        }
        });
    
    }

    if(flag==0)
    {
        _outputList=rule2(_inputList,_upper,_lower,_average);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=2;
                return false;
            }
            });
    }
    if(flag==0)
    {
        _outputList=rule3(_inputList,_upper,_lower);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=3;
                return false;
            }
            });
    }

    if(flag==0)
    {
        _outputList=rule4(_inputList);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=4;
                return false;
            }
            });
    }

    if(flag==0)
    {
        _outputList=rule5(_inputList,_upper,_lower,_average);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=5;
                return false;
            }
            });
    }

    if(flag==0)
    {
        _outputList=rule6(_inputList,_upper,_lower,_average);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=6;
                return false;
            }
            });
    }

    if(flag==0)
    {
        _outputList=rule7(_inputList,_upper,_lower,_average);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=7;
                return false;
            }
            });
    }

    if(flag==0)
    {
        _outputList=rule8(_inputList,_upper,_lower,_average);
        $.each(_outputList, function(index, value) {
            if(value==2)
            {
                flag=8;
                return false;
            }
            });
    }




    action=flagCondition.get(flag);
    action.call(this);



})

const flagCondition = new Map([
    [0, ()=>{$("#labelWarning").text("ok");$("#divResult").css("display", "none");}],
    [1, ()=>{funcRule1();$("#labelWarning").text("NG tại rule 1");}],
    [2,()=>{funcRule2();$("#labelWarning").text("NG tại rule 2");}],
    [3,()=>{funcRule3();$("#labelWarning").text("NG tại rule 3");}],
    [4,()=>{funcRule4();$("#labelWarning").text("NG tại rule 4");}],
    [5,()=>{funcRule5();$("#labelWarning").text("NG tại rule 5");}],
    [6,()=>{funcRule6();$("#labelWarning").text("NG tại rule 6");}],
    [7,()=>{funcRule7();$("#labelWarning").text("NG tại rule 7");}],
    [8,()=>{funcRule8();$("#labelWarning").text("NG tại rule 8");}],
  ])



  function addWarning()
  {
    $('body').addClass("warning");
    $('#sound').get(0).play();
    setInterVal();
    setTimeout(function()
    {
        $('body').removeClass("warning");
        setInterVal();

    },12000);
  }

  function setInterVal()
  {
    var trigger = setInterval(function() { 
        if (!$('body').hasClass('warning')) {
            clearInterval(trigger)
        }
         else {
            $('#sound').get(0).play();
        }
      }, 2000);
  }









