$(function() {
    let id = localStorage.getItem("id")
    $.getJSON('/users/user/' + id, team => {
        $('#editEmail').val(team.email)
    })

    $("#logoutBtn").click(() => {
        window.location.href = '/users/logout';
    });

    $('#editEmailBtn').on('click', function() {
        $.ajax({
            url: '/users/edit/' + id,
            data: $('#editForm').serialize(),
            type: 'PUT',
            success: function(res) {
                // on success functions
                $.getJSON('/users/user/' + id, team => {
                    $('#editEmail').val(team.email)
                })
            }
        })
    })

    $('#delBtn').on('click', function() {
        $.ajax({
            url: '/users/delete/' + id,
            type: 'DELETE',
            success: function(res) {
                window.location.href = "/users/logout"
            }
        })
    })
})