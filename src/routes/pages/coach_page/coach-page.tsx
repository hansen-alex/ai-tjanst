import { ChangeEvent, useState } from "react";
import OpenAI from "openai";
import "./coach-page.scss";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const queryOpenAI = async (query: string) => {
  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "system", content: query }],
  //   model: "gpt-3.5-turbo",
  //   // max_tokens: 100,
  //   // max_tokens: 50,
  //   max_tokens: 200,
  // });

  // return completion.choices[0].message.content;

  return "Electric Guitar. Acoustic Guitar. Semi-Acoustic Guitar. Classical Guitar. Pick. Picks. Tuner. Capo. Metronome. Amplifier. Effect Pedal. Effect Pedals. Guitar Cable. Guitar Cable Adapter. Guitar Strap. Guitar Stand. Guitar Bag. Guitar Case.";
};

//-Chat Page:
//how to make each exercise a little bit harder or easier (bpm)
//beginner, intermediate, experienced songs / parts of songs
//and put wikipedia hyper links to important terms, might need to import manually (ex. metronome)
//maybe put links to ultimate guitar / other for songs & riffs

// const experience = "beginner"; //beginner, intermediate, experienced
// const amount = 1-5
//I am a {experience} guitarist what...
// console.log(
//   await queryOpenAI(
//     `What are ${amount} ${experience} guitarist exercises? Give me these in a short form.`
//   )
// );

//click to expand
// const exercise = "Practice basic chord transitions (e.g. C to G to D)";
// console.log(
//   await queryOpenAI(
//     `Can you give me some pointers on the ${experience} guitarist exercises of: "${exercise}"? Give me this in a short form.`
//   )
// );

type ExperienceLevels = "beginner" | "intermediate" | "experienced";

const CoachPage = () => {
  const [state, setState] = useState<"start" | "recommendation" | "chat">(
    "start"
  );
  //Recommendation
  const [amount, setAmount] = useState<number>(1);
  //Chat
  const [chatQuery, setChatQuery] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  return (
    <main className="coach-page">
      {state == "start" && (
        <>
          <h2>What do you need help with?</h2>
          <span className="recommendation-or-chat">
            <button type="button" onClick={() => setState("recommendation")}>
              Get a recommendation (Exercise, Riff or Song)
            </button>
            <button type="button" onClick={() => setState("chat")}>
              Ask a question
            </button>
          </span>
        </>
      )}
      {state == "recommendation" && (
        <>
          <h2>What are you looking for?</h2>
          <div className="recommendation">
            <form action="">
              <fieldset>
                <h2>What is your experience level?</h2>
                <span>
                  <label htmlFor="experience-beginner">Beginner</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-beginner"
                    value="beginner"
                    defaultChecked
                  />
                </span>
                <span>
                  <label htmlFor="experience-intermediate">Intermediate</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-intermediate"
                    value="intermediate"
                  />
                </span>
                <span>
                  <label htmlFor="experience-experienced">Experienced</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-experienced"
                    value="experienced"
                  />
                </span>
              </fieldset>
              <fieldset>
                <h2>What?</h2>
                <span>
                  <label htmlFor="what-exercise">Exercise</label>
                  <input
                    type="radio"
                    name="what"
                    id="what-exercise"
                    value="exercise"
                    defaultChecked
                  />
                </span>
                <span>
                  <label htmlFor="what-song">Riff</label>
                  <input type="radio" name="what" id="what-riff" value="riff" />
                </span>
                <span>
                  <label htmlFor="what-song">Song</label>
                  <input type="radio" name="what" id="what-song" value="song" />
                </span>
              </fieldset>
              <fieldset>
                <h2>How many?</h2>
                <h3>{amount}</h3>
                <input
                  type="range"
                  name=""
                  id=""
                  min={1}
                  max={5}
                  step={1}
                  value={amount}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAmount(Number(event.currentTarget.value) || 1)
                  }
                />
              </fieldset>
              <button type="submit">Submit</button>
            </form>
            <button type="button" onClick={() => setState("start")}>
              Back
            </button>
          </div>
        </>
      )}
      {state == "chat" && (
        <>
          <h2>Chat with your coach</h2>
          <div className="chat">
            <div className="messages">
              {chatMessages.map((message: string, chatMessageIndex: number) => {
                const insertGearLinks = (
                  message: string
                ): (string | JSX.Element)[] => {
                  const wordListRegex =
                    /(electric guitar|acoustic guitar|semi-acoustic guitar|classical guitar|pick|tuner|capo|metronome|amplifier|effect pedal|guitar cable adapter|guitar cable|guitar strap|guitar stand|guitar bag|guitar case)/gi;

                  return message
                    .split(wordListRegex)
                    .map((string: string, index: number) =>
                      string.match(wordListRegex) ? (
                        <a
                          key={`chat-message-${chatMessageIndex}-link-${index}`}
                          className="gear-link"
                          href={
                            string.match(/(guitar bag|guitar case)/gi) //Special case as they share the same entry.
                              ? "/gear#guitar-bag-case"
                              : `/gear#${string
                                  .toLowerCase()
                                  .replace(/[\s/]/g, "-")}`
                          }
                          target="_blank"
                        >
                          {string}
                        </a>
                      ) : (
                        string
                      )
                    );
                };

                return (
                  <span
                    key={`chat-message-${chatMessageIndex}`}
                    className={chatMessageIndex % 2 == 0 ? "left" : "right"}
                  >
                    {insertGearLinks(message)}
                  </span>
                );
              })}
            </div>
            <span className="chat-query-field">
              <input
                type="text"
                name=""
                id=""
                value={chatQuery}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setChatQuery(event.currentTarget.value)
                }
              />
              <button
                type="button"
                onClick={async () => {
                  if (chatQuery.length < 1 /* || loading */) return;
                  const queryResponse = await queryOpenAI(chatQuery);

                  setChatMessages(() => [
                    ...chatMessages,
                    chatQuery,
                    queryResponse,
                  ]);
                  setChatQuery("");
                }}
              >
                Send
              </button>
            </span>
            <button type="button" onClick={() => setState("start")}>
              Back
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default CoachPage;
