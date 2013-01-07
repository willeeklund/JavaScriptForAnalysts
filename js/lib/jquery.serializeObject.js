$.fn.serializeObject = function () {
  var

    result = Object.create(null),
    mapper = function (element) {
      element.name = $.camelCase(element.name);
      return element;
    },
    extend = function (i, element) {
      var node = result[element.name];

// If node with same name exists already, need to convert it to an array as it
// is a multi-value field (i.e., checkboxes)

      if ('undefined' !== typeof node && node !== null) {
        result[element.name] = node.push ? node.push(element.value) : [node, element.value];
      } else {
        result[element.name] = element.value;
      }
    };

// For each serialzable element, convert element names to camelCasing and
// extend each of them to a JSON object

  $.each($.map(this.serializeArray(), mapper), extend);
  return result;
};