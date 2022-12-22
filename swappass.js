const MINN = 3;
const MAXN = 2000;
N = -1;

var n_entry;
var points_entry;
var error_n;

function get_string(ty, i) {

  curr_label = "<label id='" + ty + "_entry_" + i + "'>" + ty + "_" + i + "</label>";
  curr_entry = "<input id='" + ty + "_input_" + i + "'></input>";

  return curr_label + curr_entry;

}

function raise_n_error(message) {
  error_n.innerHTML = message;
  points_entry.innerHTML = "";
}

function take_n() {

  curr = n_entry.value;

  if (isNaN(curr)) {
    raise_n_error("Entered value is not a number");
    return;
  }

  curr = Number(curr);

  if (!Number.isInteger(curr)) {
    raise_n_error("Entered value must be an integer");
    return;
  }

  if (curr < MINN || curr > MAXN) {
    raise_n_error("Entered n must be between " + MINN + " and " + MAXN);
    return;
  }

  error_n.innerHTML = "OK!";
  N = curr;

  pts_html = "";
  for (let i = 1; i <= N; i++) {
    
    curr_x = get_string("X", i);
    curr_y = get_string("Y", i);
    curr_a = get_string("A", i);

    pts_html = pts_html + "<div>" + curr_x + curr_y + curr_a + "</div>";
    
  }

  points_entry.innerHTML = pts_html;

}

function init_all() {

  console.log("initing");

  n_entry = document.getElementById("n_entry");
  points_entry = document.getElementById("points_entry");
  error_n = document.getElementById("error_n");

  // https://stackoverflow.com/questions/16011312/how-can-i-execute-a-function-on-pressing-the-enter-key-in-an-input-field
  n_entry.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
      take_n();
    }
  });

}