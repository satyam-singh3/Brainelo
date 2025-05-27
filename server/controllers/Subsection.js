const SubSection =require("../models/SubSection");
const Section = require("../models/Section");
const {uploadImageToCloudinary} = require("../utils/imageUploder");

// create SubSection
exports.createSubSection = async (req,res) =>{
    try{
        // fetch data from req body
        const {sectionId,title,description} = req.body;
        // extract file/vedio
        const vedio = req.files.vedio;
        // validation 
        if (!sectionId || !title  || !description || !vedio){
            return res.status(400).json({
                success:false,
                message:'All fields are mandatory',
            });
        }
        // upload from cloudinary 
        const uploadDetails = await uploadImageToCloudinary(vedio,process.env.FOLDER_NAME);
        // create a sub section
        const subSectionDetails= await SubSection.create({
            title:title,
            timeDuration:`${uploadDetails.duration}`,
            description:description,
            vedioUrl:uploadDetails.secure_url,
        })
        // update section with this sub-section ObjectId
        const updatedSection = await Section.findByIdAndUpdate({_id:sectionId},
                                                               {$push:{
                                                                SubSection:subSectionDetails._id,
                                                               }},
                                                            {new:true}).populate("subSection")
        // return response
        return res.status(200).json({
            success:true,
            message:'Sub Section created Successfully',
            updatedSection,
        });
        
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Internal Server Error',
            error:error.message,
        })
    }
}


// updateSubsection
exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body
    const subSection = await SubSection.findById(subSectionId)

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      })
    }

    if (title !== undefined) {
      subSection.title = title
    }

    if (description !== undefined) {
      subSection.description = description
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.video
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      )
      subSection.videoUrl = uploadDetails.secure_url
      subSection.timeDuration = `${uploadDetails.duration}`
    }

    await subSection.save()

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    console.log("updated section", updatedSection)

    return res.json({
      success: true,
      message: "Section updated successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    })
  }
}


// deleteSubSection
exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    )
    const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })

    if (!subSection) {
      return res
        .status(404)
        .json({ success: false, message: "SubSection not found" })
    }

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    return res.json({
      success: true,
      message: "SubSection deleted successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    })
  }
}