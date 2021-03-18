var homepage = document.getElementById('homepage');
if(homepage){
  const intob = require('intersection-observer');
  const scrollama = require('scrollama');
  const d3 = require('d3');

  // using d3 for convenience
  // first scrollrama
  var scrolly = d3.select('#scrolly');
  var figure = scrolly.select('figure');
  var currImg = figure.select('#img1');
  var article = scrolly.select('article');
  var step = article.selectAll('.step');
  // initialize the scrollama
  var scroller = scrollama();

  // second scrollrama
  var scrolly2 = d3.select('#scrolly2');
  var figure2 = scrolly2.select('figure');
  var currImg2 = figure2.select('#image1');
  var article2 = scrolly2.select('article');
  var step2  = article2.selectAll('.step');
  // initialize the scrollama
  var scroller2 = scrollama();

  // third scrollrama
  var scrolly3 = d3.select('#scrolly3');
  var figure3 = scrolly3.select('figure');
  var currImg3 = figure3.select('#photo1');
  var article3 = scrolly3.select('article');
  var step3  = article3.selectAll('.step');
  // initialize the scrollama
  var scroller3 = scrollama();

  // fourth scrollrama
  var scrolly4 = d3.select('#scrolly4');
  var figure4 = scrolly4.select('figure');
  var currImg4 = figure4.select('#picture1');
  var article4 = scrolly4.select('article');
  var step4  = article4.selectAll('.step');
  // initialize the scrollama
  var scroller4 = scrollama();

  // fifth scrollrama
  var scrolly5 = d3.select('#scrolly5');
  var figure5 = scrolly5.select('figure');
  var currImg5 = figure5.select('#pic1');
  var article5 = scrolly5.select('article');
  var step5  = article5.selectAll('.step');
  // initialize the scrollama
  var scroller5 = scrollama();

  // sixth scrollrama
  var scrolly6 = d3.select('#scrolly6 ');
  var figure6 = scrolly6.select('figure');
  var currImg6 = figure6.select('#shot1');
  var article6 = scrolly6.select('article');
  var step6  = article6.selectAll('.step');
  // initialize the scrollama
  var scroller6 = scrollama();

  // seventh scrollrama
  var scrolly7 = d3.select('#scrolly7 ');
  var figure7 = scrolly7.select('figure');
  var currImg7 = figure7.select('#horse1');
  var article7 = scrolly7.select('article');
  var step7  = article7.selectAll('.step');
  // initialize the scrollama
  var scroller7 = scrollama();

  // eighth scrollrama
  var scrolly8 = d3.select('#scrolly8 ');
  var figure8 = scrolly8.select('figure');
  var currImg8 = figure8.select('#turtle1');
  var article8 = scrolly8.select('article');
  var step8  = article8.selectAll('.step');
  // initialize the scrollama
  var scroller8 = scrollama();

  // ninth scrollrama
  var scrolly9 = d3.select('#scrolly9 ');
  var figure9 = scrolly9.select('figure');
  var currImg9 = figure9.select('#cat1');
  var article9 = scrolly9.select('article');
  var step9  = article9.selectAll('.step');
  // initialize the scrollama
  var scroller9 = scrollama();

  // tenth scrollrama
  var scrolly10 = d3.select('#scrolly10 ');
  var figure10 = scrolly10.select('figure');
  var currImgv10 = figure10.select('#dog1');
  var article10 = scrolly10.select('article');
  var step10  = article10.selectAll('.step');
  // initialize the scrollama
  var scroller10 = scrollama();

  // eleventh scrollrama
  var scrolly11 = d3.select('#scrolly11 ');
  var figure11 = scrolly11.select('figure');
  var currImgv11 = figure11.select('#bug1');
  var article11 = scrolly11.select('article');
  var step11  = article11.selectAll('.step');
  // initialize the scrollama
  var scroller11 = scrollama();


  // for first scrollrama
  // generic window resize listener event
  function handleResize() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight *  1);
  	step.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller.resize();
  }
  // scrollama event handlers
  function handleStepEnter(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg.classed('is-visible', false);
  	currImg = figure.select('#img' + increment);
  	currImg.classed('is-visible', true);
  }
  function setupStickyfill() {
  	d3.selectAll('.sticky').each(function () {
  		Stickyfill.add(this);
  	});
  }

  // for second scrollrama
  // generic window resize listener event
  function handleResize2() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 1);
  	step2.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure2
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller2.resize();
  }
  // scrollama event handlers
  function handleStepEnter2(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step2.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg2.classed('is-visible', false);
  	currImg2 = figure2.select('#image' + increment);
  	currImg2.classed('is-visible', true);
  }

  // for third scrollrama
  // generic window resize listener event
  function handleResize3() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 1);
  	step3.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure3
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller3.resize();
  }
  // scrollama event handlers
  function handleStepEnter3(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step3.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg3.classed('is-visible', false);
  	currImg3 = figure3.select('#photo' + increment);
  	currImg3.classed('is-visible', true);
  }

  // for fourth scrollrama
  // generic window resize listener event
  function handleResize4() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 1);
  	step4.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure4
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller4.resize();
  }
  // scrollama event handlers
  function handleStepEnter4(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step4.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg4.classed('is-visible', false);
  	currImg4 = figure4.select('#picture' + increment);
  	currImg4.classed('is-visible', true);
  }

  // for fifth scrollrama
  // generic window resize listener event
  function handleResize5() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 1);
  	step5.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure5
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller5.resize();
  }
  // scrollama event handlers
  function handleStepEnter5(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step5.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg5.classed('is-visible', false);
  	currImg5 = figure5.select('#pic' + increment);
  	currImg5.classed('is-visible', true);
  }

  // for sixth scrollrama
  // generic window resize listener event
  function handleResize6 () {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 1);
  	step6.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure6
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller6.resize();
  }
  // scrollama event handlers
  function handleStepEnter6(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step6.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg6.classed('is-visible', false);
  	currImg6 = figure6.select('#shot' + increment);
  	currImg6.classed('is-visible', true);
  }

  // for seventh scrollrama
  // generic window resize listener event
  function handleResize7 () {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 1);
    step7.style('height', stepH + 'px');
    var figureHeight = window.innerHeight / 2
    var figureMarginTop = (window.innerHeight - figureHeight) / 2
    figure7
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');
    // 3. tell scrollama to update new element dimensions
    scroller7.resize();
  }
  // scrollama event handlers
  function handleStepEnter7(response) {
    //console.log(response)
    // response = { element, direction, index }
    // add color to current step only
    step7.classed('is-active', function (d, i) {
      return i === response.index;
    })
    // update graphic based on step
    var increment = response.index + 1;
    currImg7.classed('is-visible', false);
    currImg7 = figure7.select('#horse' + increment);
    currImg7.classed('is-visible', true);
  }

  // for eighth scrollrama
  // generic window resize listener event
  function handleResize8 () {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 1);
    step8.style('height', stepH + 'px');
    var figureHeight = window.innerHeight / 2
    var figureMarginTop = (window.innerHeight - figureHeight) / 2
    figure8
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');
    // 3. tell scrollama to update new element dimensions
    scroller8.resize();
  }
  // scrollama event handlers
  function handleStepEnter8(response) {
    //console.log(response)
    // response = { element, direction, index }
    // add color to current step only
    step8.classed('is-active', function (d, i) {
      return i === response.index;
    })
    // update graphic based on step
    var increment = response.index + 1;
    currImg8.classed('is-visible', false);
    currImg8 = figure8.select('#turtle' + increment);
    currImg8.classed('is-visible', true);
  }

  // for ninth scrollrama
  // generic window resize listener event
  function handleResize9 () {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 1);
    step9.style('height', stepH + 'px');
    var figureHeight = window.innerHeight / 2
    var figureMarginTop = (window.innerHeight - figureHeight) / 2
    figure9
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');
    // 3. tell scrollama to update new element dimensions
    scroller9.resize();
  }
  // scrollama event handlers
  function handleStepEnter9(response) {
    //console.log(response)
    // response = { element, direction, index }
    // add color to current step only
    step9.classed('is-active', function (d, i) {
      return i === response.index;
    })
    // update graphic based on step
    var increment = response.index + 1;
    currImg9.classed('is-visible', false);
    currImg9 = figure9.select('#cat' + increment);
    currImg9.classed('is-visible', true);
  }

  // for tenth scrollrama
  // generic window resize listener event
  function handleResize10 () {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 1);
    step10.style('height', stepH + 'px');
    var figureHeight = window.innerHeight / 2
    var figureMarginTop = (window.innerHeight - figureHeight) / 2
    figure10
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');
    // 3. tell scrollama to update new element dimensions
    scroller10.resize();
  }
  // scrollama event handlers
  function handleStepEnter10(response) {
    //console.log(response)
    // response = { element, direction, index }
    // add color to current step only
    step10.classed('is-active', function (d, i) {
      return i === response.index;
    })
    // update graphic based on step
    var increment = response.index + 1;
    currImg10.classed('is-visible', false);
    currImg10 = figure10.select('#dog' + increment);
    currImg10.classed('is-visible', true);
  }

  // for eleventh scrollrama
  // generic window resize listener event
  function handleResize11 () {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 1);
    step11.style('height', stepH + 'px');
    var figureHeight = window.innerHeight / 2
    var figureMarginTop = (window.innerHeight - figureHeight) / 2
    figure11
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');
    // 3. tell scrollama to update new element dimensions
    scroller11.resize();
  }
  // scrollama event handlers
  function handleStepEnter11(response) {
    //console.log(response)
    // response = { element, direction, index }
    // add color to current step only
    step11.classed('is-active', function (d, i) {
      return i === response.index;
    })
    // update graphic based on step
    var increment = response.index + 1;
    currImg11.classed('is-visible', false);
    currImg11 = figure11.select('#bug' + increment);
    currImg11.classed('is-visible', true);
  }

  function init() {

  	setupStickyfill();
  	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize()
		handleResize2()
    handleResize3()
    handleResize4()
    handleResize5()
    handleResize6()
    handleResize7()
    handleResize8()
    handleResize9()
    handleResize10()
    handleResize11()
  	// 2. setup the scroller passing options
  	// 		this will also initialize trigger observations
  	// 3. bind scrollama event handlers (this can be chained like below)
  	scroller.setup({
  		step: '#scrolly article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter)
      window.addEventListener('resize', handleResize)

    scroller2.setup({
  		step: '#scrolly2 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter2)

    scroller3.setup({
  		step: '#scrolly3 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter3)

    scroller4.setup({
  		step: '#scrolly4 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter4)

    scroller5.setup({
  		step: '#scrolly5 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter5)

    scroller6.setup({
  		step: '#scrolly6 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter6)

    scroller7.setup({
  		step: '#scrolly7 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter7)

    scroller8.setup({
  		step: '#scrolly8 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter8)

    scroller9.setup({
  		step: '#scrolly9 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter9)

    scroller10.setup({
  		step: '#scrolly10 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter10)

    scroller11.setup({
  		step: '#scrolly11 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter11)

  }
  // kick things off
  init();
}
