const OPERATION_TYPE_LEAST    = 'operationTypeLeast';
const OPERATION_TYPE_GREATEST = 'operationTypeGreatest';
const OPERATION_TYPE_MEAN     = 'operationTypeMean';
const OPERATION_TYPE_SUM      = 'operationTypeSum';
const OPERATION_TYPE_PRODUCT  = 'operationTypeProduct';
const EMPTY_STRING = '';

var operationType;

var val0 = EMPTY_STRING;
var val1 = EMPTY_STRING;
var val2 = EMPTY_STRING;
var val3 = EMPTY_STRING;
var val4 = EMPTY_STRING;
var arrValues;

var least;
var greatest;
var mean;
var sum;
var product;


function onSubmit() {
    event.preventDefault();
    grabEntries();
    arrValues = [val0, val1, val2, val3, val4];
    mathSwitch();
}

function grabEntries() {
    val0 = parseInt($('#inp0').val());
    val1 = parseInt($('#inp1').val());
    val2 = parseInt($('#inp2').val());
    val3 = parseInt($('#inp3').val());
    val4 = parseInt($('#inp4').val());
}

function didUserProvideValues() {
    return (null != val0 && EMPTY_STRING != val0 && 
            null != val1 && EMPTY_STRING != val1 &&
            null != val2 && EMPTY_STRING != val2 &&
            null != val3 && EMPTY_STRING != val3 &&
            null != val4 && EMPTY_STRING != val4);
}

function didUserRunProgram() {
    var outputMessage = $('#output').text();
    return EMPTY_STRING != outputMessage;
}

/* generate a new result for different type of operation
   only if the user has entered value and a result exists */
function onSelectChanged() {
    if (didUserProvideValues() && didUserRunProgram()) {
        mathSwitch();
    }
}


function sortNumericAscending(a, b) {
    return a - b;
}

function sortNumericDescending(a, b) {
    return b - a;
}

function mathSwitch() {
    operationType = $('#selectOperation').val();
    switch(operationType) {
        case OPERATION_TYPE_LEAST:
            determineLeast();
            break;
        case OPERATION_TYPE_GREATEST:
            determineGreatest();
            break;
        case OPERATION_TYPE_MEAN:
            determineMean();
            break;
        case OPERATION_TYPE_SUM:
            determineSum();
            break;
        case OPERATION_TYPE_PRODUCT:
            determineProduct();
            break;
        default:
            break;
    }
}

function determineLeast() {
    arrValues.sort(sortNumericAscending);
    least = arrValues[0];
    $('#output').text('Least: ' + least);
}

function determineGreatest() {
    arrValues.sort(sortNumericDescending);
    greatest = arrValues[0];
    $('#output').text('Greatest: ' + greatest);
}

function determineMean() {
    mean = 0;
    for (var i=0; i < arrValues.length; i++) {
        mean += arrValues[i];
    }
    mean /= arrValues.length;
    $('#output').text('Mean: ' + mean);
}

function determineSum() {
    sum = 0;
    for (var i=0; i < arrValues.length; i++) {
        sum += arrValues[i];
    }
    $('#output').text('Sum: ' + sum);
}

function determineProduct() {
    product = 1;
    for (var i=0; i < arrValues.length; i++) {
        product *= arrValues[i];
    }
    $('#output').text('Product: ' + product);
}

function onReset() {
    $('#inp0').val(EMPTY_STRING);
    $('#inp1').val(EMPTY_STRING);
    $('#inp2').val(EMPTY_STRING);
    $('#inp3').val(EMPTY_STRING);
    $('#inp4').val(EMPTY_STRING);
    $('#output').text(EMPTY_STRING);
}