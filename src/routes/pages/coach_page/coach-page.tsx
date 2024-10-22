import { ChangeEvent, FormEvent, useState } from "react";
import OpenAI from "openai";
import "./coach-page.scss";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const queryOpenAI = async (query: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query }],
    model: "gpt-3.5-turbo",
    // max_tokens: 50,
    // max_tokens: 100,
    max_tokens: 200,
  });

  return completion.choices[0].message.content;
};

type ExperienceLevels = "beginner" | "intermediate" | "experienced";
type PractiseOptions = "exercise" | "riff" | "song";

const CoachPage = () => {
  const [state, setState] = useState<"start" | "recommendation" | "chat">(
    "start"
  );

  //Chat
  const [chatQuery, setChatQuery] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  //Recommendation
  const [experience, setExperience] = useState<ExperienceLevels>("beginner");
  const [practiseOption, setPractiseOption] =
    useState<PractiseOptions>("exercise");
  const [amount, setAmount] = useState<number>(1);

  const onExperienceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value as ExperienceLevels);
  };

  const onPracticeOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPractiseOption(event.target.value as PractiseOptions);
  };

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
            <form
              onSubmit={async (event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                const query = `Can you give me ${amount} ${experience} guitarist ${practiseOption}${
                  amount > 1 ? "s" : ""
                }?`;
                const queryResponse = await queryOpenAI(query);

                setChatMessages(() => [
                  ...chatMessages,
                  query,
                  queryResponse || "Something went wrong, please ask again!",
                ]);
                setChatQuery("");
                setState("chat");

                setExperience("beginner");
                setPractiseOption("exercise");
                setAmount(1);
              }}
            >
              <fieldset className="experience">
                <h3>What is your experience level?</h3>
                <span>
                  <label htmlFor="experience-beginner">Beginner</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-beginner"
                    value="beginner"
                    onChange={onExperienceChange}
                    checked={experience == "beginner"}
                  />
                </span>
                <span>
                  <label htmlFor="experience-intermediate">Intermediate</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-intermediate"
                    value="intermediate"
                    onChange={onExperienceChange}
                    checked={experience == "intermediate"}
                  />
                </span>
                <span>
                  <label htmlFor="experience-experienced">Experienced</label>
                  <input
                    type="radio"
                    name="experience"
                    id="experience-experienced"
                    value="experienced"
                    onChange={onExperienceChange}
                    checked={experience == "experienced"}
                  />
                </span>
              </fieldset>
              <fieldset className="practise">
                <h3>What do you want to practise?</h3>
                <span>
                  <label htmlFor="what-exercise">Exercise</label>
                  <input
                    type="radio"
                    name="what"
                    id="what-exercise"
                    value="exercise"
                    onChange={onPracticeOptionChange}
                    checked={practiseOption == "exercise"}
                  />
                </span>
                <span>
                  <label htmlFor="what-riff">Riff</label>
                  <input
                    type="radio"
                    name="what"
                    id="what-riff"
                    value="riff"
                    onChange={onPracticeOptionChange}
                    checked={practiseOption == "riff"}
                  />
                </span>
                <span>
                  <label htmlFor="what-song">Song</label>
                  <input
                    type="radio"
                    name="what"
                    id="what-song"
                    value="song"
                    onChange={onPracticeOptionChange}
                    checked={practiseOption == "song"}
                  />
                </span>
              </fieldset>
              <fieldset className="amount">
                <h3>How many?</h3>
                <span>
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
                  <h4>{amount}</h4>
                </span>
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
                    /(electric guitar|acoustic guitar|semi-acoustic guitar|classical guitar|pick\b|tuner|capo|metronome|amplifier|effect pedal|guitar cable adapter|guitar cable|guitar strap|guitar stand|guitar bag|guitar case)/gi;

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
                  if (chatQuery.length < 1) return;
                  const queryResponse = await queryOpenAI(chatQuery);

                  setChatMessages(() => [
                    ...chatMessages,
                    chatQuery,
                    queryResponse || "Something went wrong, please ask again!",
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
