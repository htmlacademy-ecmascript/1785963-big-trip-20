/**
 * @typedef {import('flatpickr/dist/types/options').Options} FlatpickrOptions
 */

/**
 * @typedef {import('./utils.js').SafeHtml} SafeHtml
 */

/**
 * @typedef {import('./views/view.js').default} View
 * @typedef {import('./views/info-view.js').default} InfoView
 * @typedef {import('./views/filter-view.js').default} FilterView
 * @typedef {import('./views/add-view.js').default} AddView
 * @typedef {import('./views/sort-view.js').default} SortView
 * @typedef {import('./views/waypoint-list-view.js').default} WaypointListView
 * @typedef {import('./views/waypoint-view.js').default} WaypointView
 * @typedef {import('./views/form-view.js').default} FormView
 * @typedef {import('./views/no-waypoint-view.js').default} NoWaypointView
 * @typedef {import('./views/overlay-view.js').default} OverlayView
 */

/**
 * @typedef InfoViewState
 * @prop {string} places
 * @prop {string} dates
 * @prop {number} cost
 */

/**
 * @typedef AddViewState
 * @prop {boolean} isDisabled
 */

/**
 * @typedef FilterViewState
 * @prop {Array<FilterItemViewState>} items
 */

/**
 * @typedef FilterItemViewState
 * @prop {FilterType} value
 * @prop {boolean} isSelected
 * @prop {boolean} isDisabled
 */

/**
 * @typedef {'everything' | 'future' | 'present' | 'past'} FilterType
 */

/**
 * @typedef SortViewState
 * @prop {Array<SortItemViewState>} items
 */

/**
 * @typedef SortItemViewState
 * @prop {SortType} value
 * @prop {boolean} isSelected
 * @prop {boolean} isDisabled
 */

/**
 * @typedef {'day' | 'event' | 'time' | 'price' | 'offers'} SortType
 */

/**
 * @typedef WaypointListViewState
 * @prop {Array<PointViewState>} items
 */

/**
 * @typedef PointViewState
 * @prop {string} id
 * @prop {Array<{value: PointType, isSelected: boolean}>} types
 * @prop {Array<Destination & {isSelected: boolean}>} destinations
 * @prop {string} startDateTime
 * @prop {string} endDateTime
 * @prop {string} startDate
 * @prop {string} startTime
 * @prop {string} endTime
 * @prop {string} duration
 * @prop {number} basePrice
 * @prop {Array<Offer & {isSelected?: boolean}>} offers
 * @prop {boolean} isFavorite
 * @prop {boolean} isEditable
 * @prop {boolean} isDraft
 * @prop {boolean} [isSaving]
 * @prop {boolean} [isDeleting]
 */

/**
 * @typedef NoWaypointViewState
 * @prop {string} text
 * @prop {boolean} [isHidden]
 */

/**
 * @typedef OverlayViewState
 * @prop {boolean} isActive
 */

/**
 * @typedef UrlParams
 * @prop {string} [edit]
 * @prop {FilterType} [filter]
 * @prop {SortType} [sort]
 */

/**
 * @typedef {import('./models/model.js').default} Model
 * @typedef {import('./models/app-model.js').default} AppModel
 */

/**
 * @typedef Point
 * @prop {string} id
 * @prop {PointType} type
 * @prop {string} destinationId
 * @prop {string} startDateTime
 * @prop {string} endDateTime
 * @prop {number} basePrice
 * @prop {Array<string>} offerIds
 * @prop {boolean} isFavorite
 */

/**
 * @typedef {import('./services/api-service.js').default} ApiService
 * @typedef {import('./services/service.js').default} Service
 */

/**
 * @typedef ServiceOptions
 * @prop {string} baseUrl
 * @prop {number} minResponseTime
 * @prop {string} authorization
 */

/**
 * @typedef PointInSnakeCase
 * @prop {string} id
 * @prop {PointType} type
 * @prop {string} destination
 * @prop {string} date_from
 * @prop {string} date_to
 * @prop {number} base_price
 * @prop {Array<string>} offers
 * @prop {boolean} is_favorite
 */

/**
 * @typedef Destination
 * @prop {string} id
 * @prop {string} name
 * @prop {string} description
 * @prop {Array<Picture>} pictures
 */

/**
 * @typedef Picture
 * @prop {string} src
 * @prop {string} description
 */

/**
 * @typedef OfferGroup
 * @prop {PointType} type
 * @prop {Array<Offer>} offers
 */

/**
 * @typedef Offer
 * @prop {string} id
 * @prop {string} title
 * @prop {number} price
 */

/**
 * @typedef {'taxi' | 'bus' | 'train' | 'ship' | 'drive' | 'flight' | 'check-in' | 'sightseeing' | 'restaurant'} PointType
 */
