/**************** 
 * Block_2 *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'experience';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${String(Math.floor(Math.random() * 1000000)).padStart(6, '0')}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);




flowScheduler.add(betweenRoutineBegin());
flowScheduler.add(betweenRoutineEachFrame());
flowScheduler.add(betweenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



























flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tableaux/tab1.csv', 'path': 'tableaux/tab1.csv'},
    {'name': 'tableaux/linked.csv', 'path': 'tableaux/linked.csv'},
    {'name': 'tableaux/not-linked.csv', 'path': 'tableaux/not-linked.csv'},
    {'name': 'tableaux/linked.csv', 'path': 'tableaux/linked.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var startClock;
var x = 0, y = 0;
var text_5;
var key_resp_3;
var pause_testClock;
var cercle;
var colorClock;
var stroopClock;
var text_2;
var br;
var by;
var bg;
var bb;
var mouse;
var betweenClock;
var text_6;
var numrep;
var random_R_NRClock;
var consentClock;
var text;
var key_resp;
var text_7;
var text_8;
var pauseClock;
var text_3;
var x=0;
var y=0;
var endClock;
var text_4;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Bonjour,\nMerci de participer à cette étude.\n\nDans les minutes à venir, des mots vont apparaître devant vous.\nIl vous sera ici demandé de cliquer, avec la souris, sur la couleur dans laquelle le mot est écrit.\n\nEssayez de répondre le plus rapidement possible et de mettre la souris dans le cercle au centre de l\'écran entre chaque mot.\n\nVoici pour commencer un petit exemple.\nPour commencer, appuyez sur espace.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pause_test"
  pause_testClock = new util.Clock();
  cercle = new visual.TextStim({
    win: psychoJS.window,
    name: 'cercle',
    text: 'O',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "color"
  colorClock = new util.Clock();
  // Initialize components for Routine "stroop"
  stroopClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  br = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'br',
    text: 'rouge',
    fillColor: [0.35, 0.35, 0.35],
    borderColor: ([1.0000, 1.0000, 1.0000]),
    color: [1.0, 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [(- 0.25), 0],
    letterHeight: 0.05,
    size: [0.45, 0.3],
    ori: 0.0
    ,
    depth: -1
  });
  br.clock = new util.Clock();
  
  by = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'by',
    text: 'jaune',
    fillColor: [0.35, 0.35, 0.35],
    borderColor: [-1.0000, -1.0000, -1.0000],
    color: [1.0, 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.25, 0],
    letterHeight: 0.05,
    size: [0.45, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  by.clock = new util.Clock();
  
  bg = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bg',
    text: 'vert',
    fillColor: [0.35, 0.35, 0.35],
    borderColor: [-1.0000, -1.0000, -1.0000],
    color: [1.0, 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [(- 0.25), (- 0.3)],
    letterHeight: 0.05,
    size: [0.45, 0.3],
    ori: 0.0
    ,
    depth: -3
  });
  bg.clock = new util.Clock();
  
  bb = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bb',
    text: 'bleu',
    fillColor: [0.35, 0.35, 0.35],
    borderColor: [-1.0000, -1.0000, -1.0000],
    color: [1.0, 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.25, (- 0.3)],
    letterHeight: 0.05,
    size: [0.45, 0.3],
    ori: 0.0
    ,
    depth: -4
  });
  bb.clock = new util.Clock();
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "between"
  betweenClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Très bien, cette etude va pouvoir débuter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_3
  numrep = 1;
  
  // Initialize components for Routine "random_R_NR"
  random_R_NRClock = new util.Clock();
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Très bien,\nQuand vous êtes prêt pour la prochaine étape, apuyez sur espace\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.02), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '/6',
    font: 'Arial',
    units: undefined, 
    pos: [0.01, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'O',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Atendez s\'il vous plaît\n\n Vos resultats sont en train de s\'enregistrer...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var x=0;
var y=0;
var startMaxDurationReached;
var _key_resp_3_allKeys;
var startMaxDuration;
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startClock.reset();
    routineTimer.reset();
    startMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(text_5);
    startComponents.push(key_resp_3);
    
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    for (const thisComponent of startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tableaux/tab1.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(pause_testRoutineBegin(snapshot));
      trials_2LoopScheduler.add(pause_testRoutineEachFrame());
      trials_2LoopScheduler.add(pause_testRoutineEnd(snapshot));
      trials_2LoopScheduler.add(colorRoutineBegin(snapshot));
      trials_2LoopScheduler.add(colorRoutineEachFrame());
      trials_2LoopScheduler.add(colorRoutineEnd(snapshot));
      trials_2LoopScheduler.add(stroopRoutineBegin(snapshot));
      trials_2LoopScheduler.add(stroopRoutineEachFrame());
      trials_2LoopScheduler.add(stroopRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(random_R_NRRoutineBegin(snapshot));
      trialsLoopScheduler.add(random_R_NRRoutineEachFrame());
      trialsLoopScheduler.add(random_R_NRRoutineEnd(snapshot));
      const RandomLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(RandomLoopBegin(RandomLoopScheduler, snapshot));
      trialsLoopScheduler.add(RandomLoopScheduler);
      trialsLoopScheduler.add(RandomLoopEnd);
      trialsLoopScheduler.add(consentRoutineBegin(snapshot));
      trialsLoopScheduler.add(consentRoutineEachFrame());
      trialsLoopScheduler.add(consentRoutineEnd(snapshot));
      trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
      trialsLoopScheduler.add(pauseRoutineEachFrame());
      trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
      const nb_trials_NRLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(nb_trials_NRLoopBegin(nb_trials_NRLoopScheduler, snapshot));
      trialsLoopScheduler.add(nb_trials_NRLoopScheduler);
      trialsLoopScheduler.add(nb_trials_NRLoopEnd);
      const Random2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(Random2LoopBegin(Random2LoopScheduler, snapshot));
      trialsLoopScheduler.add(Random2LoopScheduler);
      trialsLoopScheduler.add(Random2LoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var Random;
function RandomLoopBegin(RandomLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Random = new TrialHandler({
      psychoJS: psychoJS,
      nReps: firstx, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Random'
    });
    psychoJS.experiment.addLoop(Random); // add the loop to the experiment
    currentLoop = Random;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRandom of Random) {
      snapshot = Random.getSnapshot();
      RandomLoopScheduler.add(importConditions(snapshot));
      RandomLoopScheduler.add(consentRoutineBegin(snapshot));
      RandomLoopScheduler.add(consentRoutineEachFrame());
      RandomLoopScheduler.add(consentRoutineEnd(snapshot));
      RandomLoopScheduler.add(pauseRoutineBegin(snapshot));
      RandomLoopScheduler.add(pauseRoutineEachFrame());
      RandomLoopScheduler.add(pauseRoutineEnd(snapshot));
      const nb_trials_RLoopScheduler = new Scheduler(psychoJS);
      RandomLoopScheduler.add(nb_trials_RLoopBegin(nb_trials_RLoopScheduler, snapshot));
      RandomLoopScheduler.add(nb_trials_RLoopScheduler);
      RandomLoopScheduler.add(nb_trials_RLoopEnd);
      RandomLoopScheduler.add(RandomLoopEndIteration(RandomLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var nb_trials_R;
function nb_trials_RLoopBegin(nb_trials_RLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    nb_trials_R = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trialresp, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tableaux/linked.csv',
      seed: undefined, name: 'nb_trials_R'
    });
    psychoJS.experiment.addLoop(nb_trials_R); // add the loop to the experiment
    currentLoop = nb_trials_R;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNb_trials_R of nb_trials_R) {
      snapshot = nb_trials_R.getSnapshot();
      nb_trials_RLoopScheduler.add(importConditions(snapshot));
      nb_trials_RLoopScheduler.add(colorRoutineBegin(snapshot));
      nb_trials_RLoopScheduler.add(colorRoutineEachFrame());
      nb_trials_RLoopScheduler.add(colorRoutineEnd(snapshot));
      nb_trials_RLoopScheduler.add(stroopRoutineBegin(snapshot));
      nb_trials_RLoopScheduler.add(stroopRoutineEachFrame());
      nb_trials_RLoopScheduler.add(stroopRoutineEnd(snapshot));
      nb_trials_RLoopScheduler.add(pauseRoutineBegin(snapshot));
      nb_trials_RLoopScheduler.add(pauseRoutineEachFrame());
      nb_trials_RLoopScheduler.add(pauseRoutineEnd(snapshot));
      nb_trials_RLoopScheduler.add(nb_trials_RLoopEndIteration(nb_trials_RLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function nb_trials_RLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nb_trials_R);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nb_trials_RLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function RandomLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Random);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function RandomLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var nb_trials_NR;
function nb_trials_NRLoopBegin(nb_trials_NRLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    nb_trials_NR = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trialresp, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tableaux/not-linked.csv',
      seed: undefined, name: 'nb_trials_NR'
    });
    psychoJS.experiment.addLoop(nb_trials_NR); // add the loop to the experiment
    currentLoop = nb_trials_NR;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNb_trials_NR of nb_trials_NR) {
      snapshot = nb_trials_NR.getSnapshot();
      nb_trials_NRLoopScheduler.add(importConditions(snapshot));
      nb_trials_NRLoopScheduler.add(colorRoutineBegin(snapshot));
      nb_trials_NRLoopScheduler.add(colorRoutineEachFrame());
      nb_trials_NRLoopScheduler.add(colorRoutineEnd(snapshot));
      nb_trials_NRLoopScheduler.add(stroopRoutineBegin(snapshot));
      nb_trials_NRLoopScheduler.add(stroopRoutineEachFrame());
      nb_trials_NRLoopScheduler.add(stroopRoutineEnd(snapshot));
      nb_trials_NRLoopScheduler.add(pauseRoutineBegin(snapshot));
      nb_trials_NRLoopScheduler.add(pauseRoutineEachFrame());
      nb_trials_NRLoopScheduler.add(pauseRoutineEnd(snapshot));
      nb_trials_NRLoopScheduler.add(nb_trials_NRLoopEndIteration(nb_trials_NRLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function nb_trials_NRLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nb_trials_NR);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nb_trials_NRLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Random2;
function Random2LoopBegin(Random2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Random2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: secondx, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Random2'
    });
    psychoJS.experiment.addLoop(Random2); // add the loop to the experiment
    currentLoop = Random2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRandom2 of Random2) {
      snapshot = Random2.getSnapshot();
      Random2LoopScheduler.add(importConditions(snapshot));
      Random2LoopScheduler.add(consentRoutineBegin(snapshot));
      Random2LoopScheduler.add(consentRoutineEachFrame());
      Random2LoopScheduler.add(consentRoutineEnd(snapshot));
      Random2LoopScheduler.add(pauseRoutineBegin(snapshot));
      Random2LoopScheduler.add(pauseRoutineEachFrame());
      Random2LoopScheduler.add(pauseRoutineEnd(snapshot));
      const nb_trials_R2LoopScheduler = new Scheduler(psychoJS);
      Random2LoopScheduler.add(nb_trials_R2LoopBegin(nb_trials_R2LoopScheduler, snapshot));
      Random2LoopScheduler.add(nb_trials_R2LoopScheduler);
      Random2LoopScheduler.add(nb_trials_R2LoopEnd);
      Random2LoopScheduler.add(Random2LoopEndIteration(Random2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var nb_trials_R2;
function nb_trials_R2LoopBegin(nb_trials_R2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    nb_trials_R2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trialresp, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tableaux/linked.csv',
      seed: undefined, name: 'nb_trials_R2'
    });
    psychoJS.experiment.addLoop(nb_trials_R2); // add the loop to the experiment
    currentLoop = nb_trials_R2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNb_trials_R2 of nb_trials_R2) {
      snapshot = nb_trials_R2.getSnapshot();
      nb_trials_R2LoopScheduler.add(importConditions(snapshot));
      nb_trials_R2LoopScheduler.add(colorRoutineBegin(snapshot));
      nb_trials_R2LoopScheduler.add(colorRoutineEachFrame());
      nb_trials_R2LoopScheduler.add(colorRoutineEnd(snapshot));
      nb_trials_R2LoopScheduler.add(stroopRoutineBegin(snapshot));
      nb_trials_R2LoopScheduler.add(stroopRoutineEachFrame());
      nb_trials_R2LoopScheduler.add(stroopRoutineEnd(snapshot));
      nb_trials_R2LoopScheduler.add(pauseRoutineBegin(snapshot));
      nb_trials_R2LoopScheduler.add(pauseRoutineEachFrame());
      nb_trials_R2LoopScheduler.add(pauseRoutineEnd(snapshot));
      nb_trials_R2LoopScheduler.add(nb_trials_R2LoopEndIteration(nb_trials_R2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function nb_trials_R2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nb_trials_R2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nb_trials_R2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Random2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Random2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Random2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var pause_testMaxDurationReached;
var pause_testMaxDuration;
var pause_testComponents;
function pause_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pause_testClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    pause_testMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('pause_test.started', globalClock.getTime());
    pause_testMaxDuration = null
    // keep track of which components have finished
    pause_testComponents = [];
    pause_testComponents.push(cercle);
    
    for (const thisComponent of pause_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function pause_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause_test' ---
    // get current time
    t = pause_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cercle* updates
    if (t >= 0.0 && cercle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cercle.tStart = t;  // (not accounting for frame time here)
      cercle.frameNStart = frameN;  // exact frame index
      
      cercle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cercle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cercle.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pause_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pause_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause_test' ---
    for (const thisComponent of pause_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pause_test.stopped', globalClock.getTime());
    if (pause_testMaxDurationReached) {
        pause_testClock.add(pause_testMaxDuration);
    } else {
        pause_testClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var colorMaxDurationReached;
var Liste;
var rcolor;
var x =0;
var y = 0;
var colorMaxDuration;
var colorComponents;
function colorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'color' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    colorClock.reset();
    routineTimer.reset();
    colorMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    Liste = [
        [1, -1, -1],   // red
        [-1, 1, -1],   // green
        [-1, -1, 1],   // blue
        [1, 1, -1]     // yellow
    ];
    
    // Select a random color correctly in JS
    rcolor = Liste[Math.floor(Math.random() * Liste.length)];
    
    // Save data
    psychoJS.experiment.addData("color", rcolor);
    
    console.log("rcolor:", rcolor);
    // Reset mouse position (do NOT recreate mouse)
    [x, y] = [0, 0];
    psychoJS.experiment.addData('color.started', globalClock.getTime());
    colorMaxDuration = null
    // keep track of which components have finished
    colorComponents = [];
    
    for (const thisComponent of colorComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function colorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'color' ---
    // get current time
    t = colorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of colorComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function colorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'color' ---
    for (const thisComponent of colorComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('color.stopped', globalClock.getTime());
    // the Routine "color" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stroopMaxDurationReached;
var gotValidClick;
var stroopMaxDuration;
var stroopComponents;
var x=0;
var y=0;
function stroopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stroop' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stroopClock.reset();
    routineTimer.reset();
    stroopMaxDurationReached = false;
    // update component parameters for each repeat
    text_2.setColor(rcolor);
    text_2.setText(thisWords);
    // reset br to account for continued clicks & clear times on/off
    br.reset()
    // reset by to account for continued clicks & clear times on/off
    by.reset()
    // reset bg to account for continued clicks & clear times on/off
    bg.reset()
    // reset bb to account for continued clicks & clear times on/off
    bb.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('stroop.started', globalClock.getTime());
    stroopMaxDuration = null
    // keep track of which components have finished
    stroopComponents = [];
    stroopComponents.push(text_2);
    stroopComponents.push(br);
    stroopComponents.push(by);
    stroopComponents.push(bg);
    stroopComponents.push(bb);
    stroopComponents.push(mouse);
    
    for (const thisComponent of stroopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function stroopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stroop' ---
    // get current time
    t = stroopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *br* updates
    if (t >= 0 && br.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      br.tStart = t;  // (not accounting for frame time here)
      br.frameNStart = frameN;  // exact frame index
      
      br.setAutoDraw(true);
    }
    
    if (br.status === PsychoJS.Status.STARTED) {
      // check whether br has been pressed
      if (br.isClicked) {
        if (!br.wasClicked) {
          // store time of first click
          br.timesOn.push(br.clock.getTime());
          // store time clicked until
          br.timesOff.push(br.clock.getTime());
        } else {
          // update time clicked until;
          br.timesOff[br.timesOff.length - 1] = br.clock.getTime();
        }
        if (!br.wasClicked) {
          // end routine when br is clicked
          continueRoutine = false;
          
        }
        // if br is still clicked next frame, it is not a new click
        br.wasClicked = true;
      } else {
        // if br is clicked next frame, it is a new click
        br.wasClicked = false;
      }
    } else {
      // keep clock at 0 if br hasn't started / has finished
      br.clock.reset();
      // if br is clicked next frame, it is a new click
      br.wasClicked = false;
    }
    
    // *by* updates
    if (t >= 0 && by.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      by.tStart = t;  // (not accounting for frame time here)
      by.frameNStart = frameN;  // exact frame index
      
      by.setAutoDraw(true);
    }
    
    if (by.status === PsychoJS.Status.STARTED) {
      // check whether by has been pressed
      if (by.isClicked) {
        if (!by.wasClicked) {
          // store time of first click
          by.timesOn.push(by.clock.getTime());
          // store time clicked until
          by.timesOff.push(by.clock.getTime());
        } else {
          // update time clicked until;
          by.timesOff[by.timesOff.length - 1] = by.clock.getTime();
        }
        if (!by.wasClicked) {
          // end routine when by is clicked
          continueRoutine = false;
          
        }
        // if by is still clicked next frame, it is not a new click
        by.wasClicked = true;
      } else {
        // if by is clicked next frame, it is a new click
        by.wasClicked = false;
      }
    } else {
      // keep clock at 0 if by hasn't started / has finished
      by.clock.reset();
      // if by is clicked next frame, it is a new click
      by.wasClicked = false;
    }
    
    // *bg* updates
    if (t >= 0 && bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg.tStart = t;  // (not accounting for frame time here)
      bg.frameNStart = frameN;  // exact frame index
      
      bg.setAutoDraw(true);
    }
    
    if (bg.status === PsychoJS.Status.STARTED) {
      // check whether bg has been pressed
      if (bg.isClicked) {
        if (!bg.wasClicked) {
          // store time of first click
          bg.timesOn.push(bg.clock.getTime());
          // store time clicked until
          bg.timesOff.push(bg.clock.getTime());
        } else {
          // update time clicked until;
          bg.timesOff[bg.timesOff.length - 1] = bg.clock.getTime();
        }
        if (!bg.wasClicked) {
          // end routine when bg is clicked
          continueRoutine = false;
          
        }
        // if bg is still clicked next frame, it is not a new click
        bg.wasClicked = true;
      } else {
        // if bg is clicked next frame, it is a new click
        bg.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bg hasn't started / has finished
      bg.clock.reset();
      // if bg is clicked next frame, it is a new click
      bg.wasClicked = false;
    }
    
    // *bb* updates
    if (t >= 0 && bb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bb.tStart = t;  // (not accounting for frame time here)
      bb.frameNStart = frameN;  // exact frame index
      
      bb.setAutoDraw(true);
    }
    
    if (bb.status === PsychoJS.Status.STARTED) {
      // check whether bb has been pressed
      if (bb.isClicked) {
        if (!bb.wasClicked) {
          // store time of first click
          bb.timesOn.push(bb.clock.getTime());
          // store time clicked until
          bb.timesOff.push(bb.clock.getTime());
        } else {
          // update time clicked until;
          bb.timesOff[bb.timesOff.length - 1] = bb.clock.getTime();
        }
        if (!bb.wasClicked) {
          // end routine when bb is clicked
          continueRoutine = false;
          
        }
        // if bb is still clicked next frame, it is not a new click
        bb.wasClicked = true;
      } else {
        // if bb is clicked next frame, it is a new click
        bb.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bb hasn't started / has finished
      bb.clock.reset();
      // if bb is clicked next frame, it is a new click
      bb.wasClicked = false;
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stroopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stroopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stroop' ---
    for (const thisComponent of stroopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stroop.stopped', globalClock.getTime());
    psychoJS.experiment.addData('br.numClicks', br.numClicks);
    psychoJS.experiment.addData('br.timesOn', br.timesOn);
    psychoJS.experiment.addData('br.timesOff', br.timesOff);
    psychoJS.experiment.addData('by.numClicks', by.numClicks);
    psychoJS.experiment.addData('by.timesOn', by.timesOn);
    psychoJS.experiment.addData('by.timesOff', by.timesOff);
    psychoJS.experiment.addData('bg.numClicks', bg.numClicks);
    psychoJS.experiment.addData('bg.timesOn', bg.timesOn);
    psychoJS.experiment.addData('bg.timesOff', bg.timesOff);
    psychoJS.experiment.addData('bb.numClicks', bb.numClicks);
    psychoJS.experiment.addData('bb.timesOn', bb.timesOn);
    psychoJS.experiment.addData('bb.timesOff', bb.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    // the Routine "stroop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var betweenMaxDurationReached;
var betweenMaxDuration;
var betweenComponents;
function betweenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'between' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    betweenClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    betweenMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('between.started', globalClock.getTime());
    betweenMaxDuration = null
    // keep track of which components have finished
    betweenComponents = [];
    betweenComponents.push(text_6);
    
    for (const thisComponent of betweenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function betweenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'between' ---
    // get current time
    t = betweenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of betweenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function betweenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'between' ---
    for (const thisComponent of betweenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('between.stopped', globalClock.getTime());
    if (betweenMaxDurationReached) {
        betweenClock.add(betweenMaxDuration);
    } else {
        betweenClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var random_R_NRMaxDurationReached;
var random_R_NRMaxDuration;
var random_R_NRComponents;
function random_R_NRRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'random_R_NR' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    random_R_NRClock.reset();
    routineTimer.reset();
    random_R_NRMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('random_R_NR.started', globalClock.getTime());
    random_R_NRMaxDuration = null
    // keep track of which components have finished
    random_R_NRComponents = [];
    
    for (const thisComponent of random_R_NRComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function random_R_NRRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'random_R_NR' ---
    // get current time
    t = random_R_NRClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of random_R_NRComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var a;
var trialresp;
var firstx;
var secondx;
function random_R_NRRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'random_R_NR' ---
    for (const thisComponent of random_R_NRComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('random_R_NR.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    if ((key_resp_3.keys === "space")) {
        a = Math.floor(Math.random() * 2);
        trialresp = 1;
        if ((a === 0)) {
            firstx = 0;
            secondx = 1;
        } else {
            if ((a === 1)) {
                firstx = 1;
                secondx = 0;
            }
        }
    }
    
    // the Routine "random_R_NR" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentMaxDurationReached;
var _key_resp_allKeys;
var consentMaxDuration;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consentClock.reset();
    routineTimer.reset();
    consentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    text_7.setText(numrep);
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    consentMaxDuration = null
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(text);
    consentComponents.push(key_resp);
    consentComponents.push(text_7);
    consentComponents.push(text_8);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from code
    numrep = (1 + numrep);
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pauseMaxDurationReached;
var pauseMaxDuration;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pauseClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    pauseMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('pause.started', globalClock.getTime());
    pauseMaxDuration = null
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(text_3);
    
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause' ---
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause' ---
    for (const thisComponent of pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pause.stopped', globalClock.getTime());
    if (pauseMaxDurationReached) {
        pauseClock.add(pauseMaxDuration);
    } else {
        pauseClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset(routineTimer.getTime());
    routineTimer.add(60.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS._saveResults = 0;
    
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    let dataObj = psychoJS._experiment._trialsData;
    
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'Fw941JCnHf2n',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_4);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(60.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
