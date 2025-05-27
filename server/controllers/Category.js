const Category = require("../models/Category");
const { Mongoose } = require("mongoose");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }


  

exports.creatCategory = async (req,res) =>{

    try{
        // fetch data
        const {name, description} = req.body;
        // validation
        if( !name || !description){
            return res.status(400).json({
                success:false,
                messsage:"All fields are requird",
            });
        };
        // create entry in db
        const CategoryDetails = await Category.create({
            name:name,
            description:description,
        });
        console.log(CategoryDetails);
        // return response
        return res.status(200).json({
            success:false,
            message:"Category created successfully",
        })
    }

    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        }); 
    }
}




exports.showAllCategory = async (req,res)=>{
    try{
        const allCategory = await Category.find({},{name:true , description:true});
        res.status(200).json({
            success:true,
            message:"All tags returned sucessfully",
            allCategory,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


// categoryPageDetails
exports.categoryPageDetails = async(req,res)=>{
    try{
        // get CategoryId
        const {categoryId} =req.body;
        // get course for specified categoryId
        const selectedCategory = await Category.findById(categoryId)
                                                .populate({
                                                     path: "courses",
                                                     match: { status: "Published" },
                                                      populate: "ratingAndReviews",
                                                        })
                                                        .exec(); 
        // validation
        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:'Data not Found',
            });
        }
        // when there are no courses
      if (selectedCategory.courses.length === 0) {
        console.log("No courses found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No courses found for the selected category.",
        })
      }
        // get courser for different categories
        const diiferentCategories = await Category.find({
            _id:{$ne:categoryId},
                                        })
        let differentCategory = await Category.findOne(
                                                categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
                                              ._id
                                                )
                                                .populate({
                                              path: "courses",
                                              match: { status: "Published" },
                                            })
                                            .exec()

     // Get top-selling courses across all categories
     const allCategories = await Category.find()
     .populate({
       path: "courses",
       match: { status: "Published" },
       populate: {
         path: "instructor",
     },
     })
     .exec()
   const allCourses = allCategories.flatMap((category) => category.courses)
   const mostSellingCourses = allCourses
     .sort((a, b) => b.sold - a.sold)
     .slice(0, 10)
    // console.log("mostSellingCourses COURSE", mostSellingCourses)
   res.status(200).json({
     success: true,
     data: {
       selectedCategory,
       differentCategory,
       mostSellingCourses,
     },
   })
 } 
 
 catch (error) {
   return res.status(500).json({
     success: false,
     message: "Internal server error",
     error: error.message,
   })
 }

}


