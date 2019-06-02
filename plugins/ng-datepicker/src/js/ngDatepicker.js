angular.module('jkuri.datepicker', [])

        .directive('ngDatepicker', ['$document', function ($document) {
                'use strict';

                var setScopeValues = function (scope, attrs) {
                    scope.format = attrs.format || 'YYYY-MM-DD';
                    scope.viewFormat = attrs.viewFormat || 'Do MMMM YYYY';
                    scope.locale = attrs.locale || 'fr';
                    scope.firstWeekDaySunday = scope.$eval(attrs.firstWeekDaySunday) || false;
                    scope.placeholder = attrs.placeholder || '';
                };

                return {
                    restrict: 'EA',
                    require: '?ngModel',
                    scope: {},
                    link: function (scope, element, attrs, ngModel) {
                        setScopeValues(scope, attrs);

                        scope.calendarOpened = false;
                        scope.days = [];
                        scope.dayNames = [];
                        scope.viewValue = null;
                        scope.dateValue = null;

                        moment.locale(scope.locale);
                        var date = moment();

                        var generateCalendar = function (date) {
                            var lastDayOfMonth = date.endOf('month').date(),
                                    month = date.month(),
                                    year = date.year(),
                                    n = 1;

                            var firstWeekDay = scope.firstWeekDaySunday === true ? date.set('date', 2).day() : date.set('date', 1).day();
                            if (firstWeekDay !== 1) {
                                n -= firstWeekDay - 1;
                            }


                            scope.dateValue = date.format('MMMM YYYY');

                            //Mettre en français
                            var MMMM = date.format('MMMM');
                            var YYYY = date.format('YYYY');
                            var mois = "";
                            switch (MMMM) {

                                case 'January':
                                    mois = "Janvier"
                                    break;
                                case 'February':
                                    mois = "Février"
                                    break;
                                case 'March':
                                    mois = "Mars"
                                    break;
                                case 'April':
                                    mois = "Avril"
                                    break;
                                case 'May':
                                    mois = "Mai"
                                    break;
                                case 'June':
                                    mois = "Juin"
                                    break;
                                case 'July':
                                    mois = "Juillet"
                                    break;
                                case 'August':
                                    mois = "Août";
                                    break;
                                case 'September':
                                    mois = "Septembre"
                                    break;
                                case 'October':
                                    mois = "Octobre"
                                    break;
                                case 'November':
                                    mois = "Novembre"
                                    break;
                                case 'December':
                                    mois = "Décembre"
                                    break;
                            }

                            scope.dateValue = mois + ' ' + YYYY;

                            scope.days = [];

                            var dimanche = "";
                            var selection = "";

                            for (var i = n; i <= lastDayOfMonth; i += 1) {
                                if (i > 0) {


                                    //Pour ajouter class pour les samedi et dimanche (weekend)
                                    var mois = month + 1;
                                    var date_complet = mois + "/" + i + "/" + year;
                                    var var_date = new Date(date_complet);
                                    var le_jour = var_date.getDay();

                                    if (le_jour == 0 || le_jour == 6)
                                    {
                                        dimanche = "weekend";
                                    } else {
                                        dimanche = "";
                                    }


                                    //Marquer la valeur selectionner en bleu seulement pour la norme française
                                    var myFormat = scope.viewFormat;
                                    var myDate = scope.viewValue;
                                    var dateReoganiser = "";

                                    if (myDate != "" && myDate != undefined) {


                                        if (myFormat == "DD/MM/YYYY")
                                        {
                                            var tab_date = myDate.split("/");
                                            dateReoganiser = tab_date[1] + "/" + tab_date[0] + "/" + tab_date[2];
                                        }

                                        var var_date_input = new Date(dateReoganiser);
                                        if (var_date_input.getTime() == var_date.getTime())
                                        {
                                            selection = "date-en-bleu";
                                        } else {
                                            selection = "";
                                        }
                                    }


                                    scope.days.push({day: i, month: month + 1, year: year, enabled: true, weekend: dimanche, selectionner: selection});

                                } else {
                                    scope.days.push({day: null, month: null, year: null, enabled: false, weekend: dimanche, selectionner: selection});
                                }
                            }
                        };

                        var generateDayNames = function () {
                            var date = scope.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
                            for (var i = 0; i < 7; i += 1) {

                                var ddd = date.format('ddd');
                                var jour = "";
                                switch (ddd) {
                                    case 'Mon':
                                        jour = "Lun";
                                        break;
                                    case 'Tue':
                                        jour = "Mar";
                                        break;
                                    case 'Wed':
                                        jour = "Mer";
                                        break;
                                    case 'Thu':
                                        jour = "Jeu";
                                        break;
                                    case 'Fri':
                                        jour = "Ven";
                                        break;
                                    case 'Sat':
                                        jour = "Sam";
                                        break;
                                    case 'Sun':
                                        jour = "Dim";
                                        break;
                                }

                                scope.dayNames.push(jour);
                                //Metre en français

                                date.add('1', 'd');
                            }
                        };

                        generateDayNames();

                        scope.showCalendar = function () {
                            scope.calendarOpened = true;
                            generateCalendar(date);
                        };

                        scope.closeCalendar = function () {
                            scope.calendarOpened = false;
                        };

                        scope.prevYear = function () {
                            date.subtract(1, 'Y');
                            generateCalendar(date);
                        };

                        scope.prevMonth = function () {
                            date.subtract(1, 'M');
                            generateCalendar(date);
                        };

                        scope.nextMonth = function () {
                            date.add(1, 'M');
                            generateCalendar(date);
                        };

                        scope.nextYear = function () {
                            date.add(1, 'Y');
                            generateCalendar(date);
                        };

                        scope.selectDate = function (event, date) {
                            event.preventDefault();
                            var selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
                            ngModel.$setViewValue(selectedDate.format(scope.format));
                            scope.viewValue = selectedDate.format(scope.viewFormat);
                            scope.closeCalendar();
                        };

                        // if clicked outside of calendar
                        var classList = ['ng-datepicker', 'ng-datepicker-input'];
                        if (attrs.id !== undefined)
                            classList.push(attrs.id);
                        $document.on('click', function (e) {
                            if (!scope.calendarOpened)
                                return;

                            var i = 0,
                                    element;

                            if (!e.target)
                                return;

                            for (element = e.target; element; element = element.parentNode) {
                                var id = element.id;
                                var classNames = element.className;

                                if (id !== undefined) {
                                    for (i = 0; i < classList.length; i += 1) {
                                        if (id.indexOf(classList[i]) > -1 || classNames.indexOf(classList[i]) > -1) {
                                            return;
                                        }
                                    }
                                }
                            }

                            scope.closeCalendar();
                            scope.$apply();
                        });

                        ngModel.$render = function () {
                            var newValue = ngModel.$viewValue;
                            if (newValue !== undefined) {
                                if (attrs.viewFormat == "DD/MM/YYYY")
                                {
                                    if (newValue != null) {
                                        var tab_date_fr = newValue.split('/');
                                        var date_fr = tab_date_fr[1] + '/' + tab_date_fr[0] + '/' + tab_date_fr[2];
                                        newValue = date_fr;

                                        scope.viewValue = moment(newValue).format(attrs.viewFormat);
                                        scope.dateValue = newValue;
                                    } else {
                                        newValue = "";
                                        scope.dateValue = newValue;
                                    }

                                }


                            }
                        };

                    },
                    template:
                            '<div><input type="text" ng-focus="showCalendar()" ng-model="viewValue" class="ng-datepicker-input" placeholder="{{ placeholder }}" readonly></div>' +
                            '<div class="ng-datepicker" ng-show="calendarOpened">' +
                            '  <div class="controls">' +
                            '    <div class="left">' +
                            '      <i class="fa fa-backward prev-year-btn" ng-click="prevYear()"></i>' +
                            '      <i class="fa fa-angle-left prev-month-btn" ng-click="prevMonth()"></i>' +
                            '    </div>' +
                            '    <span class="date" ng-bind="dateValue"></span>' +
                            '    <div class="right">' +
                            '      <i class="fa fa-angle-right next-month-btn" ng-click="nextMonth()"></i>' +
                            '      <i class="fa fa-forward next-year-btn" ng-click="nextYear()"></i>' +
                            '    </div>' +
                            '  </div>' +
                            '  <div class="day-names">' +
                            '    <span ng-repeat="dn in dayNames">' +
                            '      <span>{{ dn }}</span>' +
                            '    </span>' +
                            '  </div>' +
                            '  <div class="calendar">' +
                            '    <span ng-repeat="d in days">' +
                            '      <span class="day {{d.weekend}} {{d.selectionner}}" ng-click="selectDate($event, d)" ng-class="{disabled: !d.enabled}">{{ d.day }}</span>' +
                            '    </span>' +
                            '  </div>' +
                            '</div>'
                };
//'      <span class="day" ng-click="selectDate($event, d)" ng-class="{disabled: !d.enabled || d.dimanche}">{{ d.day }}</span>' +
            }]);

