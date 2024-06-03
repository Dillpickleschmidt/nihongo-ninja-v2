import ContentBox from "@/components/ContentBox"
import SelectText from "@/components/text/MultipleChoiceText"
import data1 from "@/data/chapter-0/common-phrases-1.json"
import data2 from "@/data/chapter-0/common-phrases-2.json"
import VocabCards from "@/features/vocab-card/VocabCards"

export default function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/numbers"
    >
      <h1 className="pt-28 px-28 pb-6 text-3xl">
        Now that you're familiar with the basics, let's dive into some common
        Japanese greetings. These phrases will be your first steps into
        conversational Japanese, and they're essential for everyday
        interactions.
      </h1>
      <VocabCards data={data1} />
      <div className="px-16 space-y-8">
        <div className="mx-12 space-y-8 my-8">
          <p>
            <strong>As an Apology:</strong> In situations where a light apology
            is needed, &quot;Sumimasen&quot; is often used. For instance, if you
            accidentally bump into someone, you can say &quot;Sumimasen&quot; to
            apologize. <br />
            <strong>Politeness Level:</strong> It's more polite than
            &quot;ごめんなさい (Gomen nasai),&quot; which is more casual.
          </p>
          <p>
            <strong>To Get Someone's Attention:</strong> It's also used to
            politely get someone's attention, like a waiter in a restaurant or
            when you're asking for directions. <br />
            Public Spaces: Saying &quot;Sumimasen&quot; before asking a question
            or making a request is common courtesy in Japan.
          </p>
          <p>
            <strong>Expressing Gratitude:</strong> Interestingly, "Sumimasen"
            can also be a way to express gratitude, especially when someone has
            gone out of their way to help you. In this context, it conveys a
            sense of indebtedness or apology for the trouble, along with
            gratitude. <br />
            Example: If someone picks up something you dropped and hands it to
            you, saying &quot;Sumimasen&quot; can express both thanks and a
            light apology for the inconvenience caused to them.
          </p>
          <p>
            <strong>Indirectness:</strong> The Japanese language often favors
            indirectness and politeness. &quot;Sumimasen&quot; is a perfect
            example of this, as it softly conveys apology, request, or gratitude
            without being too direct or forceful. <br />
            <strong>Frequent Use:</strong> You'll hear &quot;Sumimasen&quot;
            very frequently in Japan due to the high value placed on politeness
            and humility in Japanese culture.
          </p>
        </div>
        <p>
          Think of すみません as the Swiss Army knife of Japanese phrases - it's
          super versatile and always handy. It's the polite magic word that
          covers everything from &quot;My bad!&quot; to &quot;Excuse me!&quot;
          and &quot;Thanks a lot!&quot; all rolled into one. In Japan, where
          politeness is practically a sport, &quot;Sumimasen&quot; is your MVP
          phrase, getting you through all sorts of social jams with just the
          right touch of courtesy and charm.
        </p>
        <p>
          So, whenever you're in doubt, a friendly &quot;Sumimasen&quot; is
          often the perfect thing to say. It's the duct tape of Japanese
          conversation - fixes everything and keeps things smoothly running!
        </p>
      </div>
      <h2 className="text-center my-8 px-16 font-bold text-2xl">
        Now for the rest.
      </h2>
      <VocabCards data={data2} countOffset={1} />
      <p className="px-16">
        And there you have it, the essential phrases to not act like a rude
        person in Japanese! Use them wisely, use them often, and watch as you
        magically transform into a social samurai! 🌟🗣️🎉
      </p>
      {/* Practice */}
      <div className="px-24 text-xl leading-8 space-y-4 [&>*]:space-y-4">
        <h3 className="!pt-32 !pb-6 text-5xl font-bold text-center">
          Practice
        </h3>
        <p>
          You're leaving for school and say goodbye to your family. What do you
          say?
        </p>
        <SelectText
          answer="いってきます"
          a="いただきます"
          b="いってきます"
          c="ただいま"
          d="おやすみなさい"
        />
        <p>
          You just got back home from work. You open the door and say,
          '__________.'
        </p>
        <SelectText
          answer="ただいま"
          a="いってきます"
          b="いただきます"
          c="ただいま"
          d="すみません"
        />
        <p>
          It's late at night and you're about to go to bed. How do you wish your
          roommate a good night?
        </p>
        <SelectText
          answer="おやすみなさい"
          a="おやすみなさい"
          b="いってらっしゃい"
          c="ごちそうさまでした"
          d="よろしく おねがいします"
        />
        <p>
          You say 'ごちそうさまでした' after finishing a meal to express
          gratitude.
        </p>
        <SelectText answer="True" a="True" b="False" />
        <p>
          You meet someone for the first time and say 'はじめまして'. Is this
          correct?
        </p>
        <SelectText answer="Yes" a="Yes" b="No" />
        {/* <p>Match the following expressions with their meanings:</p>
        <p>
          a. いいえ <br />
          b. すみません <br />
          c. おかえりなさい <br />
          d. よろしく おねがいします <br />
          Meanings: [Polite refusal or disagreement, Greeting someone returning
          home, Expression of request for good relations, Polite way to get
          attention or apologize]
        </p> */}
        <p>Your friend is leaving for a trip. You say:</p>
        <SelectText
          answer="いってらっしゃい"
          a="ただいま"
          b="いってらっしゃい"
          c="いただきます"
          d="おかえりなさい"
        />
        <p>
          You accidentally step on someone's foot in a crowded train. You
          quickly say:
        </p>
        <SelectText
          answer="すみません"
          a="いいえ"
          b="すみません"
          c="おやすみなさい"
          d="いただきます"
        />
        <p>
          You're at a Japanese pet cafe, and a mischievous cat decides to jump
          onto your table. The cafe staff rushes over and asks if the cat is
          yours. You laugh and respond:
        </p>
        <SelectText
          answer="いいえ"
          a="おかえりなさい"
          b="すみません"
          c="いいえ"
          d="いただきます"
        />
        <p>
          Explanation: Using &quot;いいえ&quot; in this context is a
          light-hearted way to clarify the comical misunderstanding - no, this
          café-hopping feline isn't your sneaky pet! The other options would
          create amusingly absurd responses, like welcoming the cat home or
          thanking it as if it were a meal! 🐱🤣🚫
        </p>
      </div>
    </ContentBox>
  )
}
