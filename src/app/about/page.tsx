import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import Head from "next/head"

export default function About() {
  return (
    <div className="min-h-screen px-4 pb-12 pt-28 text-primary sm:px-6 lg:px-8">
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <Head>
        <title>About Nihongo Ninja</title>
        <meta
          name="description"
          content="Learn about Nihongo Ninja, a passion project to help students with Japanese language learning"
        />
      </Head>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          About Nihongo Ninja
        </h1>

        <div className="overflow-hidden bg-card !p-8 shadow sm:rounded-lg sm:!p-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="mt-1 font-light">
            Nihongo Ninja is a passion project created by Dylan Kuzmick, a
            fellow student who's been through the trenches of Japanese college
            classes and lived to tell the tale. Born from personal experience
            and a deep love for the Japanese language, this platform is designed
            to be the resource I wish I had when I started. Unlike traditional
            courses that limit you to a fixed curriculum, Nihongo Ninja aims to
            be your go-to hub for Japanese learning. We've scoured the internet
            to curate the best learning materials, bringing them together in one
            place for free. Whether you're looking for in-depth grammar
            explanations, real-world usage examples, or specialized practice
            tools, you'll find it all here.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-semibold">
            The Story Behind Nihongo Ninja
          </h2>
          <p className="mt-1 font-light">
            As a former student who once believed{" "}
            <span className="font-japanese font-semibold">分かりません</span>{" "}
            was an acceptable answer to every question in Japanese class, I
            intimately understand the challenges of learning Japanese. Nihongo
            Ninja was born from the ashes of countless failed exams and the
            realization that there had to be a better way.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-semibold">Our Approach</h2>
          <p className="mt-1 font-light">
            At Nihongo Ninja, we believe that learning Japanese should be an
            adventure, not a chore. We combine traditional language learning
            techniques with modern technology, creating an experience that's
            more enjoyable than trying to use chopsticks for the first time -
            and hopefully more successful.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-semibold">What We Offer</h2>
          <ul className="mt-1 list-inside list-disc space-y-2 font-light">
            <li>
              <span className="font-semibold">Curated Learning Hub:</span>{" "}
              Nihongo Ninja is your ultimate Japanese learning curator. We've
              scoured the internet to bring you the best learning materials, all
              in one place. Each lesson includes carefully selected external
              resources, from grammar explanations to listening practice,
              significantly enhancing your learning experience.
            </li>
            <li>
              <span className="font-semibold">College Textbook Alignment:</span>{" "}
              Our content follows the order of common college textbooks,
              allowing you to directly apply what you learn here to your
              classes.
            </li>
            <li>
              <span className="font-semibold">
                Student-Centric Grammar Explanations:
              </span>{" "}
              Clear, concise breakdowns of Japanese grammar concepts, designed
              by a student who's been in your shoes.
            </li>
            <li>
              <span className="font-semibold">
                Real-World Vocabulary Examples:
              </span>{" "}
              Every vocab word comes with authentic usage examples from anime
              and TV shows, bridging the gap between textbook Japanese and
              real-life language [wip].
            </li>
            <li>
              <span className="font-semibold">Integrated Kanji Learning:</span>{" "}
              Seamless integration with jpdb.io for efficient kanji learning and
              spaced repetition practice, ensuring you retain what you learn.
            </li>
            <li>
              <span className="font-semibold">Vocab Practice:</span> Our unique
              "practice mode" is designed for extremely fast vocabulary
              memorization, helping you quickly fill your brain with words for
              that upcoming quiz.
            </li>
            <li>
              <span className="font-semibold">Conjugation Practice:</span>{" "}
              Master the art of Japanese verb and adjective conjugations with
              our dedicated conjugation practice tool. Say goodbye to
              conjugation confusion and hello to confident Japanese expression.
            </li>
            <li>
              <span className="font-semibold">Open Lesson Structure:</span> No
              locks, no set order. Access any lesson you need for your class or
              whatever piques your interest. We're all about removing barriers
              to learning.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-semibold">Join Our Dojo</h2>
          <p className="mt-1 font-light">
            Whether you're struggling with your first Japanese class or aiming
            to polish your advanced skills, Nihongo Ninja is here to support
            your journey. Let's turn that "
            <span className="font-japanese">何？</span>" into a "
            <span className="font-japanese">なるほど</span>!" one step at a
            time.
          </p>

          <p className="mt-8 font-light">
            For questions, suggestions, or just to say{" "}
            <span className="font-japanese">こんにちは</span>, feel free to
            reach out at{" "}
            <span className="text-base font-extralight">
              drkuzmick@gmail.com
            </span>
            .
          </p>

          <p className="mt-4 font-light">
            <span className="font-japanese">がんばって！</span>(That's "good
            luck" - you might need it.)
          </p>

          <p className="mt-4 font-light">
            Dylan Kuzmick
            <br />
            Founder, Nihongo Ninja
          </p>

          <p className="mt-8 text-sm font-light italic">
            P.S. No actual ninjas were harmed in the making of this website.
            They're far too stealthy for that.
          </p>
        </div>
      </div>
    </div>
  )
}
