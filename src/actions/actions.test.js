import configureMockStore from 'redux-mock-store';
import * as actions from './actions';

const store = configureMockStore()();


describe('testing all actions', () => {
  const mockTides = [
    {
      date: 'wednesday',
      day: 'whatever',
      gmt: '2017-4-19',
      hour: '12AM',
      name: 'san diego',
      tide: 3,
      tide_meters: 1
    }
  ]

  const mockSpit = [
    {
      date: 'wednesday',
      day: 'whatever',
      gmt: '2017-4-19',
      hour: '12AM',
      latitude: 32,
      live: 1,
      longitude: -118,
      shape: 'f',
      shape_datail: {},
      shape_full: 'fair',
      size: 3,
      size_ft: 3.12,
      spot_id: 229,
      spot_name: 'blacks beach'
    }
  ]

  const mockSurfline = {
    Tide: {},
    Quickspot: {},
    SurflineWeather: {},
    Sort: {},
    Weather: {},
    WaterTemp: {},
    timeZoneString: "America/Los_Angeles",
    _metadata: {},
    timezone: -7,
    id: "4211",
    hourlyWind: {},
    HiresWind: {},
    Surf: {},
    new_hd_cam: "false",
    theWalue: "985 4211",
    hvp: {},
    lat: "33.984",
    Analysis: {},
    Confidence: {},
    Ureport: {},
    lon: "-118.475",
    Wind: {},
    Location: {},
    name: "Venice Beach"
  }

  afterEach(() => {
    store.clearActions();
  })

  it('testing saintDiegoTides', () => {
    let expectedAction = { type: 'GRAB_TIDES', tides: mockTides}

    store.dispatch(actions.saintDiegoTides(mockTides));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastBeaconsSurf', () => {
    let expectedAction = { type: 'BEACONS_SURF', report: mockSpit}

    store.dispatch(actions.spitCastBeaconsSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineBeaconsSurf', () => {
    let expectedAction = { type: 'SL_BEACONS_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineBeaconsSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineBeaconsTide', () => {
    let expectedAction = { type: 'SL_BEACONS_TIDE', report: mockSurfline}

    store.dispatch(actions.surfLineBeaconsTide(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastBlacksSurf', () => {
    let expectedAction = { type: 'BLACKS_SURF', report: mockSpit}

    store.dispatch(actions.spitCastBlacksSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineBlacksSurf', () => {
    let expectedAction = { type: 'SL_BLACKS_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineBlacksSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastCardiffSurf', () => {
    let expectedAction = { type: 'CARDIFF_SURF', report: mockSpit}

    store.dispatch(actions.spitCastCardiffSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineCardiffSurf', () => {
    let expectedAction = { type: 'SL_CARDIFF_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineCardiffSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastOceansideSurf', () => {
    let expectedAction = { type: 'OCEANSIDE_SURF', report: mockSpit}

    store.dispatch(actions.spitCastOceansideSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineOceansideSurf', () => {
    let expectedAction = { type: 'SL_OCEANSIDE_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineOceansideSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastPontoSurf', () => {
    let expectedAction = { type: 'PONTO_SURF', report: mockSpit}

    store.dispatch(actions.spitCastPontoSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLinePontoSurf', () => {
    let expectedAction = { type: 'SL_PONTO_SURF', report: mockSurfline}

    store.dispatch(actions.surfLinePontoSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastScrippsSurf', () => {
    let expectedAction = { type: 'SCRIPPS_SURF', report: mockSpit}

    store.dispatch(actions.spitCastScrippsSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineScrippsSurf', () => {
    let expectedAction = { type: 'SL_SCRIPPS_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineScrippsSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastSwamisSurf', () => {
    let expectedAction = { type: 'SWAMIS_SURF', report: mockSpit}

    store.dispatch(actions.spitCastSwamisSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineSwamisSurf', () => {
    let expectedAction = { type: 'SL_SWAMIS_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineSwamisSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastTamarackSurf', () => {
    let expectedAction = { type: 'TAMARACK_SURF', report: mockSpit}

    store.dispatch(actions.spitCastTamarackSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineTamarackSurf', () => {
    let expectedAction = { type: 'SL_TAMARACK_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineTamarackSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing spitCastWindanseaSurf', () => {
    let expectedAction = { type: 'WINDANSEA_SURF', report: mockSpit}

    store.dispatch(actions.spitCastWindanseaSurf(mockSpit));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing surfLineWindanseaSurf', () => {
    let expectedAction = { type: 'SL_WINDANSEA_SURF', report: mockSurfline}

    store.dispatch(actions.surfLineWindanseaSurf(mockSurfline));

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('testing logIn', () => {
    let expectedAction = { type: 'LOG_IN', boolean: true}

    store.dispatch(actions.logIn(true))

    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

})