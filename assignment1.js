

// "Answer the question why JavaScript needs the parentheses in this case?"

// ** The reason parenthesis are needed to complete this exercise is because of operator precedence - grouping (using parenthesis) is listed at number 19 according to the MDN documenation - the highest priority. Simple multiplication and division are listed at number 13 in order of precedence, which would create a conflict and lead to an incorrect calculation.



//Assignment instructions:

// Calculate the area of two triangles and then compare the values of the result to see which one has the biggest area. Code one example for each test data that you are provided. That means one case (code example) for the first test data, one for the second and so on. Use template literals to output the result to the console.

// You can calculate the area of a triangle using the formula: area = (base * height) / 2

// NOTE! Use the parentheses when doing the area calculation. 


// Case 1
// triangleOne: base = 10cm, height = 13cm
// triangleTwo: base = 16,5cm, height = 20,3cm

const triangleOneArea = (10 * 13) / 2;
const triangleTwoArea = (16.5 * 20.3) / 2;
if (triangleOneArea > triangleTwoArea) {
    console.log(`In Case 1, Triangle One has an area of ${triangleOneArea} cm2 and Triangle Two has an area of ${triangleTwoArea} cm2. 

The triangle with the biggest area is Triangle One.`);
} else if (triangleOneArea < triangleTwoArea) {
    console.log(`In Case 1, Triangle One has an area of ${triangleOneArea} cm2 and Triangle Two has an area of ${triangleTwoArea} cm2. 
    
The triangle with the biggest area is Triangle Two.`);
} else {
    console.log(`In Case 1, Triangle One has an area of ${triangleOneArea} cm2 and Triangle Two has an area of ${triangleTwoArea} cm2. 
    
The areas of the triangles are equal.`);
}

// Case 2
// triangleThree: base = 16,5cm, height = 20,3cm
// triangleFour: base = 20,3cm, height = 16,5cm

const triangleThreeArea = (16.5 * 20.3) / 2;
const triangleFourArea = (20.3 * 16.5) / 2;

if (triangleThreeArea > triangleFourArea) {
    console.log(`In Case 2, Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleTwoArea} cm2. 

The triangle with the biggest area is Triangle Three.`);
} else if (triangleThreeArea < triangleFourArea) {
    console.log(`In Case 2, Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleFourArea} cm2. 
    
The triangle with the biggest area is Triangle Four.`);
} else {
    console.log(`In Case 2, Triangle Three has an area of ${triangleThreeArea} cm2 and Triangle Four has an area of ${triangleFourArea} cm2. 
    
The areas of the triangles are equal.`);
}

// Case 3
// triangleFive: base = 7,8cm, height = 5,6cm
// triangleSix: base = 9,3cm, height = 12,4cm

const triangleFiveArea = (7.8 * 5.6) / 2;
const triangleSixArea = (9.3 * 12.4) / 2;

if (triangleFiveArea > triangleSixArea) {
    console.log(`In Case 3, Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. 

The triangle with the biggest area is Triangle Five.`);
} else if (triangleFiveArea < triangleSixArea) {
    console.log(`In Case 3, Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. 

The triangle with the biggest area is Triangle Six.`);
} else {
    console.log(`In Case 2, Triangle Five has an area of ${triangleFiveArea} cm2 and Triangle Six has an area of ${triangleSixArea} cm2. 
    
The areas of the triangles are equal.`);
}