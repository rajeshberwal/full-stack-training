function deleteUserHandeler(evt) {
    $.ajax({
        method: 'delete',
        url: '/delete/' + $(evt.target).attr('data-del'),
        success: function (res) {
            console.log(res);
        },
        error: function (err) {
            console.log('Error: ', err);
        },
    })
}

function addUserHandler() {
    if ($("#username").val() || $("#useremail").val() || $("#usercity").val()) {
        let nuser = {
            username: $("#username").val(),
            useremail: $("#useremail").val(),
            usercity: $("#usercity").val()
        };

        $.ajax({
            method: 'post',
            url: "/add",
            data: JSON.stringify(nuser),
            contentType: 'application/json',
            dataType: 'json',
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log('Error', err);
            }
        })
    } else {
        alert('Please fill all the user deatils.');
    }
}

function editUserHandeler(evt) {
    $("#edituserbox").show(500);
    $("#adduserbox").hide(500);

    $.ajax({
        method: 'get',
        url: '/edit/' + $(evt.target).attr('data-edit'),
        success: function (res) {
            $("#edit_username").val(res.username);
            $("#edit_useremail").val(res.useremail);
            $("#edit_usercity").val(res.usercity);
            $("#edit_userid").val(res.id);
            // $("#editBtn").attr("data_userid", res._id);
        },
        error: function (err) {
            console.log('Error: ', err);
        },
    })

    // console.log('Edit User Button Clicked');
}

function updateUserHandler() {
    // let selectedUserID = $("#edit_userid").val();
    // // let selectedUserID = $("#editBtn").attr("data_userid");
    // console.log(selectedUserID);

    let updatedUser = {
        username: $("#edit_username").val(),
        useremail: $("#edit_useremail").val(),
        usercity: $("#edit_usercity").val()
    }

    $.ajax({
        method: 'post',
        url: "/edit/" + $("#edit_userid").val(),
        data: JSON.stringify(updatedUser),
        contentType: 'application/json',
        dataType: 'json',
        success: function (res) {
            $("#edituserbox").hide(500);
            $("#adduserbox").show(500);

            $("#edit_username").val('');
            $("#edit_useremail").val('');
            $("#edit_usercity").val('');

            console.log(res);
        },
        error: function (err) {
            console.log('Error', err);
        }
    });
}
$(function () {
    // $("#adduserbox").hide(2000);
    $("#edituserbox").hide();
    refresh();


    // adding listeners
    $("#usergrid").on('click', '.btn-danger', deleteUserHandeler);
    $("#usergrid").on('click', '.btn-warning', editUserHandeler);
    $("#addBtn").on('click', addUserHandler);
    $("#editBtn").on('click', updateUserHandler);
})

function refresh() {
    $.ajax({
        url: "/data",
        success: function (res, statusText, jqxhr) {
            // console.log('Response: ', res['users']);
            $(res.users).each(function (idx) {
                // $("#usergrid").html("");
                $("#usergrid").append(
                    `<tr>
                        <th scope="row">${idx+1}</th>
                        <td>${res['users'][idx].username}</td>
                        <td>${res['users'][idx].useremail}</td>
                        <td>${res['users'][idx].usercity}</td>
                        <td><button data-edit="${res['users'][idx].id}" class="btn btn-warning">Edit User</button></td>
                        <td><button data-del="${res['users'][idx].id}" class="btn btn-danger">Delete User</button></td>
                    </tr>`
                );
            });
        },
        error: function (jqxhr, textStatus, error) {
            console.log('Error: ', error);
        }
    });
}