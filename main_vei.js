// effet escalier:
let testOneVeille = document.querySelector('#testOneVeille');
let positionTestOneVeille = -430;
let testTwoVeille = document.querySelector('#testTwoVeille');
let positionTestTwoVeille = -820;
let testThreeVeille = document.querySelector('#testThreeVeille');
let positionTestThreeVeille = -1050;
let testFourVeille = document.querySelector('#testFourVeille');
let positionTestFourVeille = -1400;
testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille}px)`);
testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille}px)`);
testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille}px)`);
testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille}px)`);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille + scrolled * 4}px)`); 
  if ((scrolled * 4) > 200) {
    testOneVeille.setAttribute("style", `transform:translate(250px,100px)`);
    testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille + scrolled * 4}px)`);
    if ((scrolled * 4) > 350) {
      testTwoVeille.setAttribute("style", `transform:translate(250px,100px)`);
      testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille + scrolled * 4}px)`);
      if ((scrolled * 4) > 500) {
        testThreeVeille.setAttribute("style", `transform:translate(250px,100px)`);
        testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille + scrolled * 4}px)`);
        if ((scrolled * 4) > 650) {
          testFourVeille.setAttribute("style", `transform:translate(250px,100px)`);
        }
      }
    }
  }
  else {
    testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille + scrolled * 4}px)`);
    testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille}px)`);
    testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille}px)`);
    testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille}px)`);
  }
});
// fin effet esclaier