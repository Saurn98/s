var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Sudip.jfif", "Jayasree.jfif" , "Sourik.jfif", "", ""];
var names = ["Fmaily Book","Sudip Kanti Dhar", "Jayasree Saha", "Sourik Dhar", "Rishik Bose", "Dipjyoti Bose","Debashree Saha","Suprit Kumar Dhar","Sashreek Dhar","Minakshi Pal","Sudhendu Dhar","Pranati Dhar","Gokul Chandra Saha","Iti Saha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
