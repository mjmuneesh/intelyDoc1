gsap.to("#usecasesSection .boxes",{
    transform:"translateY(-690%)",
      duration:5,
      delay:0.7,
      scrollTrigger:{
          trigger:"#usecasesSection",
          scroller:"body",
          markers:true,
          start:"top 0",
      end:"top -200%",
      scrub:5,
      pin:true,
      stagger:0.5
   
      }
  })
  

$(document).ready(function(){
    // Toggle function for "Load more" button
    $('.load_text').click(function(){
        $('.load_more').toggleClass('d-none d-normal');
        var text = $('.switch').text();
        $('.switch').text(text == "Show More" ? "Show Less" : "Show More");
        $('.load_text i').toggleClass('fa-angle-down fa-angle-up');
    });


});

let efficiency=document.getElementById('efficiency');
let accuracy=document.getElementById('accuracy');
let versatility=document.getElementById('versatility');
let integration=document.getElementById('integration');
let flexible=document.getElementById('flexible');
let tagging=document.getElementById('tagging');
let feature_title=document.getElementById('feature_title');
let feature_content=document.getElementById('feature_content');
let feature_img=document.getElementById('feature_img');

function reset(){
  efficiency.style.color="#000";
  efficiency.style.fontWeight="500";
  accuracy.style.color="#000";
  accuracy.style.fontWeight="500";
  versatility.style.color="#000";
  versatility.style.fontWeight="500";
  integration.style.color="#000";
  integration.style.fontWeight="500";
  flexible.style.color="#000";
  flexible.style.fontWeight="500";
  tagging.style.color="#000";
  tagging.style.fontWeight="500";
}
efficiency.addEventListener('click',function(){
  reset();
  efficiency.style.color="#197976";
  efficiency.style.fontWeight="600";
  feature_title.innerHTML="Efficiency";
  feature_content.innerHTML="Say goodbye to manual data entry and tedious document processing. IntelyDoc automates repetitive tasks, saving time and resources.";
  feature_img.setAttribute('src','./images/efficiency.png');
})

accuracy.addEventListener('click',function(){
  reset();
  accuracy.style.color="#197976";
  accuracy.style.fontWeight="600";
  feature_title.innerHTML="Accuracy";
  feature_content.innerHTML=" With a remarkable 100% accuracy rate for handwritten documents, you can trust IntelyDoc to handle your data with precision.";
  feature_img.setAttribute('src','./images/accuracy.png');
})

versatility.addEventListener('click',function(){
  reset();
  versatility.style.color="#197976";
  versatility.style.fontWeight="600";
  feature_title.innerHTML="Versatility";
  feature_content.innerHTML="From multilingual documents to template-agnostic processing, IntelyDoc adapts to your specific requirements seamlessly.";
  feature_img.setAttribute('src','./images/efficiency.png');
})

integration.addEventListener('click',function(){
  reset();
  integration.style.color="#197976";
  integration.style.fontWeight="600";
  feature_title.innerHTML="Integration";
  feature_content.innerHTML="IntelyDoc offers APIs for smooth integration with existing systems, enabling effortless upward and downward data flow.";
  feature_img.setAttribute('src','./images/accuracy.png');
})

flexible.addEventListener('click',function(){
  reset();
  flexible.style.color="#197976";
  flexible.style.fontWeight="600";
  feature_title.innerHTML="Flexible";
  feature_content.innerHTML="Receive output in any format you prefer, including XML, Excel, JSON, PDF, or any other format, ensuring compatibility with your existing systems and processes.";
  feature_img.setAttribute('src','./images/efficiency.png');
})

tagging.addEventListener('click',function(){
  reset();
  tagging.style.color="#197976";
  tagging.style.fontWeight="600";
  feature_title.innerHTML="Image Processing and Metadata Tagging";
  feature_content.innerHTML="IntelyDoc goes beyond text-based documents, seamlessly processing images and intelligently tagging metadata to enhance organization and retrieval efficiency.";
  feature_img.setAttribute('src','./images/accuracy.png');
})

AOS.init();