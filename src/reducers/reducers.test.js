import { tides,
  spitBeaconsReport,
  spitBlacksReport,
  spitTamarackReport,
  surfLineBeaconsReport,
  surfLineBlacksReport,
  surfLineBeaconsTide,
  spitPontoReport,
  surfLinePontoReport,
  surfLineTamarackReport,
  spitWindanseaReport,
  surfLineWindanseaReport,
  spitScrippsReport,
  surfLineScrippsReport,
  currentUser,
  spitCardiffReport,
  surfLineCardiffReport,
  spitOceansideReport,
  surfLineOceansideReport,
  spitSwamisReport,
  surfLineSwamisReport }  from './reducers'



describe('testin all these reducers', () => {

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

  it('test tides reducer, should return an empty array as default', () => {
      expect(tides(undefined, {})).toEqual([])

    //   expect(tides(undefined, {
    //   type: 'GRAB_TIDES',
    //   mockTides
    // })).toEqual(mockTides);
  })

  it('tides reducer should get tides, man.', () => {
    const mockTide = [
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

    expect(tides([], {
      type: 'GRAB_TIDES',
      tides: mockTide
    }))
    .toEqual([mockTide])
  })

  it('spitBeaconsReport should return an empty array as default', () => {
    expect(spitBeaconsReport(undefined, [])).toEqual([])
  })

  it('spitBeaconsReport should return an arrary of objects', () => {
    const mockForecast = [
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
    expect(spitBeaconsReport([], {
      type: 'BEACONS_SURF',
      report: mockForecast
    }))
    .toEqual([mockForecast])
  })

  it('surfLineBeaconsReport should return an empty array as default', () => {
    expect(surfLineBeaconsReport(undefined, [])).toEqual([])
  })

  it('surfLineBeaconsReport should return an array of objects', () => {
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

    expect(surfLineBeaconsReport([], {
      type: 'SL_BEACONS_SURF',
      report: mockSurfline
    }))
    .toEqual(mockSurfline)
  })

})






