




$(function(){

    $('#movieSubmit').on('submit',function(e) {
        e.preventDefault();
        let count = 0;
        let title = $('#title').val();
        let rating = $('#rating').val();
        let movieData = {title, rating, count};
         let moreData = createMovieDataHTML(movieData);
         $("#movie-table-body").append(moreData);
        count++;
        $('#title').val('')
        $('#rating').val('') 

    })

    $("table").on("click", ".btn", function(evt) {
        $(evt.target)
      .closest("tr")
      .remove();

      });
})

function createMovieDataHTML(data) {
    return `
      <tr id="row${data.count}">
        <td >${data.title}</td>
        <td }>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.count}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }

