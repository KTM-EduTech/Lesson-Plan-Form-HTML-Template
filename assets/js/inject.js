function injectFormData() {
          // Get form data
          const lessonTitle = document.getElementById("lesson-title").value;
          const lessonSubtopic = document.getElementById("lesson-subtopic").value;
          const selectedLearningGroups = Array.from(document.getElementById("learning-group").selectedOptions)
                    .map((option) => option.value)
                    .join(", ");
          const selectedSubjects = Array.from(document.getElementById("subject-relevance").selectedOptions)
                    .map((option) => option.value)
                    .join(", ");
          const keywords = document.getElementById("input-keywords").value;
          const overview = document.getElementById("input-overview").value;
          const objectives = document.getElementById("input-smart-objectives").value;
          const introduction = document.getElementById("input-introduction").value;
          const developments = document.getElementById("input-developments").value;
          const assessments = document.getElementById("input-assessments").value;
          const differentiations = document.getElementById("input-differentiations").value;
          const closure = document.getElementById("input-closure").value;
          const integration = document.getElementById("input-integration").value;
          const reflections = document.getElementById("input-reflections").value;

          // Inject form data into the HTML template
          document.getElementById("inject-title").textContent = lessonTitle;
          document.getElementById("inject-subtopic").textContent = lessonSubtopic;
          document.getElementById("inject-group").textContent = selectedLearningGroups;
          document.getElementById("inject-subject").textContent = selectedSubjects;
          document.getElementById("inject-keywords").textContent = keywords;
          document.getElementById("inject-overview").textContent = overview;
          document.getElementById("inject-objectives").textContent = objectives;
          document.getElementById("inject-introduction").textContent = introduction;
          document.getElementById("inject-developments").textContent = developments;
          document.getElementById("inject-assessments").textContent = assessments;
          document.getElementById("inject-differentiations").textContent = differentiations;
          document.getElementById("inject-closure").textContent = closure;
          document.getElementById("inject-integration").textContent = integration;
          document.getElementById("inject-reflections").textContent = reflections;
}
