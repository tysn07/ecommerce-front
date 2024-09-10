function AddressDropmenu() {
    const myArray = ["Item 1", "Item 2", "Item 3", "Item 4"];
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <div className="dropdown">
            <button onClick={myFunction} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                {myArray.map((item, index) => (
                    // Render a div for each item in the array
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );

}
export default AddressDropmenu