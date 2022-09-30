import React from "react";
import {useNavigate} from "react-router-dom";
import { useState, useMemo } from "react";
import { getTags } from "helpers";
import store from "store";
import {questions} from "data/data";
import TagsDropdown from "./components/tagsDropdown/TagsDropdown";
import useQuestionPicker from "./hooks/UseQuestionPicker";





const getFilteredQuestions = (questions, tags) => {
   return !tags.length
      ? questions
      : questions.filter((quest) => {
           return tags.some((tag) => quest.tags.includes(tag));
        });
};



export default function Learning() {
   // console.log('Render called');

   const navigate = useNavigate();
	const [tags, setTags] = useState(() => store.getLearningTags()); // <-
	

	const filtQuestions = React.useCallback(getFilteredQuestions(questions, tags), [tags]);
   const [picked, pick, showAnswer] = useQuestionPicker(filtQuestions);
   


	function handlePick(e) {
      e.currentTarget.blur();
		pick();
	}

   function handleShowAnswer(e) {
      e.currentTarget.blur();
		showAnswer();
	}
	
	// Don't want it to always get dropdown values on every render, so useMemo
   const allTags = useMemo(() => {
      // console.log("dropdownOptions called");
      return getTags(questions);
   }, []);

   function handleTagSelect(tags) {
      store.setLearningTags(tags);
      setTags(tags);
	}
	

   if (!filtQuestions.length) {
      return null;
   }

   // Questions filtered by applied tags
	const renderQuestion = (() => {
		const {index, question, showAnswer, progress} = picked;

		if (question !== null) {
			// console.log(question);
         const { quest, answ } = question;
         const { desc, code, url } = answ;

         return (
				<>
               <div className="text-center">{index}/{filtQuestions.length} {progress}%</div>
               <h2 className="title my-4">{quest}</h2>
               {showAnswer && (
                  <div className="answer">
                     {desc && <div className="desc">{desc}</div>}
                     {code && <div className="code">{code}</div>}
                     {url && (
                        <div className="link">
                           <a href={url} target="_blank" rel="noreferrer">
                              Doc
                           </a>
                        </div>
                     )}
                  </div>
               )}
            </>
         );
      } else {
         // return <div>No Question</div>
      }
   })();


   return (
      <div className="py-4 px-1 px-sm-0">
         <div className="container">
            <div className="row mb-4">
               <div className="col-auto">
                  <div className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                     Back
                  </div>
               </div>
            </div>
            <div className="row justify-content-between align-items-start mb-4">
					<div className="col">
						
                  <TagsDropdown
                     options={allTags}
                     isMulti="true"
                     onChange={handleTagSelect}	
                     value={tags}
						/>
						
                  <div className="text-center">Total: {filtQuestions.length}</div>
               </div>
               <div className="col-auto">
                  <div className="btns" style={{ width: "70px" }}>
                     <button className="btn btn-outline-secondary btn-sm w-100 mb-2" onClick={handlePick}>Pick</button>
                     <button className={`btn btn-outline-secondary btn-sm w-100 ${picked.showAnswer ? 'disabled' : ''}`} onClick={handleShowAnswer}>Answer</button>
                  </div>
               </div>
            </div>

				<div className="">
					{renderQuestion}
				</div>
         </div>
      </div>
   );
}
