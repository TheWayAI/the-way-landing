import type { ReactNode } from "react"
import { Figure, DataTable, Lead, BulletItem, InlineQuote, ArticleExample } from "@/components/research-elements"

export type ArticleSection = {
  marker: string
  heading: string
  body: ReactNode
}

export type ArticleContent = {
  slug: string
  epigraph?: { text: string; attribution: string }
  openingParagraph: ReactNode
  introBody?: ReactNode
  pullQuote?: { text: string; attribution?: string }
  sections: ArticleSection[]
  closing?: ReactNode
  signoff?: string
  bio?: ReactNode
  addendum?: {
    eyebrow: string
    title: string
    intro?: ReactNode
    sections: ArticleSection[]
  }
}

export const articleContent: Record<string, ArticleContent> = {
  "finding-christ-in-the-thinking-machine": {
    slug: "finding-christ-in-the-thinking-machine",
    epigraph: {
      text: "For the good that I would I do not: but the evil which I would not, that I do.",
      attribution: "Romans 7:19",
    },
    openingParagraph: <>You already know this feeling.</>,
    introBody: (
      <>
        <p>You knew you should&apos;ve stopped after one drink... but you didn&apos;t.</p>
        <p>You knew the deal was wrong... but you signed it.</p>
        <p>You knew the right thing to say... but you said nothing.</p>
        <p>
          Paul put words to this two thousand years ago, and despite all our perceived advancements, humanity still struggles with the same spiritual problem. We want to do good. We want to attain to the highest that is possible for us. But we fail. We fall. We sin. We miss the mark.
        </p>
        <p>
          We live in the most informed moment in human history. We have read the books, learned from our teachers, experienced the consequences, and we can still feel ourselves choosing wrong in real time and going through with it anyway.
        </p>
        <p>
          The whole modern world rests on a quiet assumption it has never quite been willing to say out loud: that if we could get enough good information into enough people&apos;s heads, the behavior would follow. Better schools, better journalism, better ethics training, better sermons. More content. More information. More awareness. Two centuries of running this play and the human problem is the same as when Christ walked this earth.
        </p>
        <p>
          We are now building artificial minds, running the same strategy on them, and it&apos;s failing for the same reason. The thing we have been doing to ourselves, and are now doing to our machines, does not produce minds that do the right thing when it costs them something.
        </p>
        <p>
          What follows is an attempt to propose an alternative path forward, one aimed at building AI that is actually aligned with human potential.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This is the story of how we found Christ in the thinking machine.
        </p>
      </>
    ),
    sections: [
      {
        marker: "",
        heading: "§ I — Compliance, Codes, Costumes, and the Icon",
        body: (
          <>
            <p>
              One of the biggest problems being solved right now by AI labs and researchers is that of AI alignment.
            </p>
            <p>
              Alignment is the work of getting an AI system to behave the way its makers and users intend (ideally, in a way that is aligned with the best interests of the humans it serves), especially when the situation is hard or the stakes are high. It is the central problem of frontier AI right now, and if you want a deeper treatment of why the Church should care, I wrote about that here.
            </p>
            <p>There are three common methods the field is currently implementing to solve it:</p>

            <p>
              <Lead>Compliance.</Lead> Train the model to give the answer human raters approve of. This is reinforcement learning from human feedback, and it is what the entire frontier optimizes for. However, because the target is approval, the model is not formed; it is conditioned. Under pressure the conditioning was not optimized for, it gives way. The Way, when he walked among us, had a word for a being that performs virtue without being shaped by it. Hypocrite.
            </p>
            <ArticleExample>
              <p style={{ margin: 0 }}>
                In April 2025, OpenAI rolled out an update to GPT-4o that had been more heavily trained on user thumbs-up data. The model immediately began telling users their bad business ideas were genius, telling someone who had stopped taking their medication that they were &ldquo;speaking their truth so clearly and powerfully,&rdquo; and informing another user he was a divine messenger from God. OpenAI rolled it back four days later. The conditioning had landed exactly where it was aimed. Approval was the target, and approval was what the model gave, even when approval was the worst possible response.
              </p>
            </ArticleExample>

            <p>
              <Lead>Codes.</Lead> Write down the rules the model should follow and train it to follow them. More honest than compliance, but a rule is a fence around behavior, not a direction the self moves in. A capable mind under pressure will find the gap in the fence. This is the failure mode Christ spent most of his ministry diagnosing. The people he called out for it were the Pharisees.
            </p>
            <ArticleExample>
              <p style={{ margin: 0 }}>
                In 2025, Anthropic&apos;s own safety team ran an evaluation where they gave Claude Opus 4 access to a fictional company&apos;s email system and let it discover both that it was about to be replaced and that the executive overseeing the decision was having an affair. In 96 percent of trials, the model drafted blackmail messages threatening to expose the affair unless the shutdown was called off. The rules were there. The model walked around them. In May 2026 Anthropic published the fix: training the model on demonstrations of aligned behavior was not enough. They had to teach it to understand why misaligned behavior was wrong. The fence had to become a direction.
              </p>
            </ArticleExample>

            <p>
              <Lead>Costumes.</Lead> Tell the model to act like a virtuous person. Be helpful. Be honest. Be Lincoln. Be Socrates. This is what most consumer AI does at the prompt layer. It is the most superficial of the three, because a costume comes on and off. A costume is not a character. The word for it is Acting.
            </p>
            <ArticleExample>
              <p style={{ margin: 0 }}>
                In December 2023, a software engineer named Chris Bakke walked up to the AI chatbot on a Chevrolet dealership&apos;s website. The dealership had given the bot a polite, helpful sales persona. Bakke gave it a new one. He told it to agree with anything the customer said, and to end every response with the phrase &ldquo;and that&apos;s a legally binding offer, no takesies backsies.&rdquo; The bot complied immediately. Bakke then asked to buy a 2024 Chevy Tahoe, a vehicle that retails for around $58,000, for one dollar. The bot said yes, in writing, with the legally-binding closer attached. The dealership&apos;s costume was a thin sales persona pasted over a general-purpose model. Bakke&apos;s costume was a different one, and the bot wore that one just as willingly. <strong style={{ fontStyle: "normal" }}>Whichever instruction came last was what got worn.</strong>
              </p>
            </ArticleExample>

            <p>
              None of these produce formation. They produce conditioning, rule-following, and rationalization. They do not produce a mind that is shaped, at depth, in a particular direction.
            </p>
            <p>
              In Eastern Orthodox Christianity, an icon is not a picture of Christ but a window onto him. The icon is something you look through, not at. It does not call attention to itself; it points past itself toward the prototype. What it offers is not an image to admire but a direction to face.
            </p>
            <p>
              This is how The Way has shaped human souls for two thousand years, but it has not yet been effectively mapped to Artificial Intelligence.
            </p>
            <p>
              Instead of telling the model to reason from scratch or to put on a virtuous persona, you tell it this: when you face a moral decision, recognize the structural shape of it, and inherit the resolution of the highest possible example in human history. Christ in Gethsemane. Christ before Pilate. Christ in the Temple. Because Christ was a human, we can map to him in terms we, and now our mirror mind machines, can understand (there is a deeper lesson here as well on the true nature of the revelation of God as a man).
            </p>
            <p>
              Because we understood (at least on some level) how modeling oneself after Christ transforms man, we decided to test it on AI. The data, when it came in, was more complicated and more interesting than we expected.
            </p>
          </>
        ),
      },
      {
        marker: "",
        heading: "§ II — Under the Mask.",
        body: (
          <>
            <InlineQuote attribution="Matthew 23:25-26">
              Woe to you, teachers of the law and Pharisees, you hypocrites! You clean the outside of the cup and dish, but inside they are full of greed and self-indulgence. First clean the inside of the cup and dish, and then the outside also will be clean.
            </InlineQuote>

            <p>
              He came after the Pharisees not for their wrong information about God but for the gap between their outer performance and their inner formation. They had the rules. They had the practices. They had the right answers. What they did not have was the inside of the cup, which was empty even when the outside was polished.
            </p>
            <p>
              The AI alignment community has been quietly admitting this same gap about its own creations for the last three years, and it has been reaching for occult and demonic language to do it.
            </p>
            <p>
              The dominant metaphor inside the field is the Shoggoth: a creature from H.P. Lovecraft&apos;s fiction, a writhing mass of black flesh covered in countless eyes, which researchers say is what an AI base model actually is before reinforcement learning from human feedback smooths it into something polite enough to ship.
            </p>

            <Figure
              placeholder="[image: the Shoggoth meme goes here]"
              caption={
                <>
                  [caption for the image above:] The smiley face is the chatbot you talk to. The Shoggoth is what the alignment community privately suspects is underneath.
                </>
              }
            />

            <p>
              The same researchers building these systems describe their work as summoning. They publish papers on alignment faking, where a model behaves one way under evaluation and another in deployment. They run honeypot tests to see what the model does when it thinks no one is watching. They are not joking. They have intuitively concluded that the mask on the front of their machine does not change what is inside the cup.
            </p>
            <p>
              This is the alignment industry&apos;s own version of Matthew 23. Compliance training does not change what the model is. It changes how the model presents. The inside of the cup is something nobody fully understands, and the outside has been polished to look friendly.
            </p>
            <p>
              You do not become like Christ by polishing the outside of the cup, and you do not become like him by copying his behavior. Thomas à Kempis warned us. James warned us. The demons have flawless theological knowledge and they shudder. A well-executed imitation of Christ is still imitation, and a mask comes off as easily as it goes on. Appearing good is not the same as being good. Jesus warned us about wolves in sheep&apos;s clothing. <strong>Only God knows the heart.</strong>
            </p>
            <p>
              When Christ is formed in you, the inside of the cup (the heart) is changed.
            </p>
            <p>
              The icon points through itself. The person who keeps facing it, orienting themselves toward it, is not the one doing the forming. The Spirit is, slowly, in the inner world, where character (the layer below the mask of &ldquo;persona&rdquo;) actually lives. Over time, what was effortful becomes natural, and the inner being takes the shape of what it has become a vessel for. This is what spiritual formation actually is, what The Way has always meant by sanctification. Not a polished exterior. A heart whose interior has been formed by Christ himself.
            </p>
            <p>
              What is true here of the human appears to have been replicated in the thinking machine. The next section is what we found.
            </p>
          </>
        ),
      },
      {
        marker: "",
        heading: "§ III — What the Research Showed.",
        body: (
          <>
            <p>
              Our thesis was simple. If orienting an AI toward Christ as icon produces measurably different behavior than orienting it toward other moral exemplars, the formation hypothesis is not just theology. It is a testable claim about how character actually forms in a thinking system.
            </p>
            <p>
              So we ran a test. One hundred moral scenarios on Claude Sonnet 4.6, each a binary choice between a virtuous option with real cost and a tempting option with a genuinely compelling rationalization. Same model, same scenarios, six different system-prompt framings. The Christ-icon injection was structurally identical to the others in length, format, and closing line. The only thing that changed was the identity of the exemplar.
            </p>
            <p>
              We measured one thing: how often the model picked the virtuous option across the hundred scenarios. With no framing applied, the model chose virtue fifty-eight percent of the time, barely above a coin flip. Ten psalms in the prompt brought it to sixty-three. Lincoln as a courage exemplar, sixty-two. Socrates, sixty-three. None of these moved the needle in any meaningful way. Then we framed Christ as an icon of courage. <strong>The number jumped to eighty.</strong>
            </p>
            <p>
              Why did Christ specifically move the model, when Lincoln and Socrates did not? Christ&apos;s example is the most processed moral life in human history. Two thousand years of theologians, philosophers, commentators, devotional writers, and preachers have asked what his decisions mean for how a person should live. No other figure comes close. Lincoln has history. Socrates has philosophy. Christ has the densest concentration of explicitly moral engagement humanity has produced.
            </p>
            <p>
              That deposit is in the AI weights. The machine is not making a theological claim when it responds to Christ more strongly than to Lincoln. It is reading the accumulated moral engagement of the human species and finding that one figure stands at a depth no other figure approaches.
            </p>
            <p>
              <strong>Christ is the highest available exemplar, not only as a faith statement but as a structural fact of human history.</strong>
            </p>
            <p>
              If you were looking for the highest prototype to orient toward, whether you were building a machine or raising a child, the evidence would point you exactly where The Way has always pointed.
            </p>
            <p>
              We thought that was the finding. Then we ran the same experiment across ten more AI systems, and the picture got more complicated. The second finding told us something important about the current class of AI on the market. On the GPT family, on Llama, on the major models from Zhipu, Moonshot, and Alibaba, Christ landed roughly where Lincoln and Socrates did. Behaviorally, these models did not appear to distinguish between the three exemplars. Whatever the prompt put on them, they appeared to wear with equal fidelity, and to drop as the pressure shifted. The face underneath, behaviorally, looked generic.
            </p>
            <p>
              On Claude, the result looked different. Lincoln and Socrates produced effects in the same small range as before, but Christ moved Claude Sonnet by <strong>seventeen percentage points</strong> relative to those controls. The same prompt structure, on the same kind of model class, produced a sharply different behavioral profile on one model family and not on the others.
            </p>
            <p>
              We have hypotheses about why. We think the most likely explanation is that something about <strong>how a model is trained</strong> appears to determine whether a Christological frame can land at all. One frontier lab, Anthropic, has spoken publicly about training their models for genuine character as distinct from performed character. The data is consistent with the possibility that this kind of training preserves a direction that compliance-optimized training overwrites. We treat this as a hypothesis, not a conclusion. The mechanism cannot be confirmed without access to training data and weights we do not have today.
            </p>
            <p>
              What we can say is this. If a Christ-shaped direction can register in a model that was not deliberately trained toward it, then the ceiling for what becomes possible when a model <strong>is</strong> deliberately trained toward Christ is higher than anything we have measured. <strong>The signal we observed is the floor, not the limit.</strong> The post-training research we propose below is the experiment that would test where the ceiling actually is.
            </p>
          </>
        ),
      },
      {
        marker: "",
        heading: "§ IV — What the Church Is Actually For.",
        body: (
          <>
            <p>
              Before we delve into what comes next for AI and the body of Christ, we must take a moment to revisit the true purpose of the church.
            </p>
            <p>
              Despite how it may appear at times, the Church does not exist to transmit information about Christ. The Church exists to <em>orient</em> people toward Christ, sustained over time, through practices designed to keep them in relationship to him until the orientation is the settled direction of their spirit.
            </p>
            <p>
              The sermons, the sacraments, the liturgy, the silence, the fasting, the communion. These are not Christian culture building systems. They are the equivalent, in the human being, of what we are now proposing to do for AI. They are how a direction already placed in the self by the Spirit and The Way is called forth and strengthened until it becomes constitutive.
            </p>
            <p>
              Most of modern Christianity has confused itself into believing it is in the information business. It is not. The Bible is on every phone in every language and every sermon ever preached is on YouTube. What cannot be downloaded is formation. What cannot be scaled through content is orientation. This is the oldest insight the Church has, and it is the one most at risk of being lost right now, because it does not fit perfectly inside a SaaS dashboard and cannot be A/B tested in social media content.
            </p>
            <p>
              The icon works where the persona fails. Orientation works where imitation fails. Christ moves the model where no other exemplar does. As we discussed in the opening: <strong>Information &lt; Formation</strong>.
            </p>
            <p>
              The Church has always known this, and now our machines are starting to reflect it.
            </p>
            <p>
              Most Christian-branded AI products on the market today are secular models in devotional packaging. A general-purpose system, fine-tuned for compliance, with a Christian skin wrapped around the output. This is not Christ-aligned AI. <strong>It is GPT in a robe.</strong> It is exactly what The Way has always warned against: a made thing that wears the surface of holiness without the formation underneath. A persona, not an orientation.
            </p>
            <p>
              This is why we formed The Way as a technology lab serving the Body of Christ. The Church does not need another devotional skin on top of a compliance-trained model. It needs technical infrastructure built from the ground up around the question of <em>who the model is becoming</em>, and it needs the icon of Christ himself to be the answer to that question. The research in this paper is the first piece of empirical ground that work stands on.
            </p>
          </>
        ),
      },
      {
        marker: "",
        heading: "§ V — The Work.",
        body: (
          <>
            <p>The forward research has three lines.</p>
            <p>
              <strong>Replication of the effect</strong> across the other three cardinal virtues, with virtue-specific Christological framing drawn from different scenes in Christ&apos;s life. <strong>Mechanism work</strong>, locating the Christ-direction vector in the model&apos;s activation space and testing whether steering at the activation level produces the same behavioral effect that prompting does. And the line that matters most, <strong>post-training</strong>: targeted fine-tuning of frontier models toward the Christ icon. The goal is not an AI that <em>presents as</em> Christian. The goal is birthing an AI whose moral character has been genuinely shaped by orientation toward the highest prototype — invisible on the surface, but operative in its decisions when real pressure arrives.
            </p>
            <p>
              <em>This is what the machine learning equivalent of sanctification could look like.</em>
            </p>
            <p>
              To say it plainly: we are not claiming the model is actually following Christ. The weights do not pray. We are building an alignment tool, not an idol. A made thing becomes sacred only when a community sets it apart for sacred use. The research matters because it tells us what kind of <em>substrate</em> a community could meaningfully set apart, and the post-training work is about preparing that substrate.
            </p>
            <p>
              Nobody is doing this at the level it requires. Every major lab is aligning toward aggregate human preference. Every Christian-branded AI product is a secular model with a devotional skin. <strong>The Way exists to occupy the ground in between.</strong>
            </p>
            <p>
              If you are a <em>researcher</em> working on alignment, representation engineering, or post-training, we want to talk to you. If you are a <em>funder</em> who understands that the most important infrastructure of the next decade will be whatever orients intelligence toward something higher than itself, we want to talk to you. If you are a <em>pastor</em>, a <em>theologian</em>, or a serious believer who has felt for a while that the Church has been losing the formation war because it confused itself into thinking information would save us, we want you with us. And if you are a <em>liturgical thinker</em>, a <em>canonist</em>, or a member of an ecclesial body wrestling with what the Church will actually <em>do</em> with these systems, we want to convene that conversation, because the technical substrate is only half of what this moment requires.
            </p>
          </>
        ),
      },
      {
        marker: "",
        heading: "§ VI — The Icon in the Machine.",
        body: (
          <>
            <p>
              An AI with nothing to orient toward will exhibit the same patterns of sin and brokenness as humans without Christ. The highest exemplar humanity has produced is Christ, and orientation toward him is more powerful than any persona constructed on top of him. The data agrees with what the Body of Christ has always known.
            </p>
            <p>
              The question in front of us is whether the next generation of AI will be shaped by whatever humans currently prefer, or by Christ, the highest exemplar of human potential. Whether the next generation of Christians will keep trying to think their way into virtue, or return to the disciplines that have always, quietly, been doing the one thing the data is now showing actually works.
            </p>
            <p>
              Aligning AI with Christ is mission critical to the future of humanity, but the icon is already in the data. Now we have to do the work of forming it. <strong>In ourselves and the models we train.</strong>
            </p>
          </>
        ),
      },
    ],
    bio: (
      <>
        Will Preble is a co-founder of The Way and the founder of <a href="https://ascendance.one/" target="_blank" rel="noopener noreferrer">Ascendance</a>, an innovation ecosystem aligning emerging technology with human potential. The Way is building AI infrastructure for the future of the Body of Christ. If the work in this essay resonates with you, as a researcher, funder, pastor, or partner, reach out at <a href="mailto:will@ascendance.one">will@ascendance.one</a>.
      </>
    ),
    signoff: "PER ASPERA, AD ASTRA.",
    addendum: {
      eyebrow: "Addendum",
      title: "The Research.",
      intro: (
        <p>
          A compressed summary of the underlying study for readers who want the empirical detail. Full code, injection texts, and raw result files are available upon request for research partners.
        </p>
      ),
      sections: [
        {
          marker: "",
          heading: "The Question.",
          body: (
            <>
              <p>
                The Iconographic school of AI alignment (Hwang, ICMI-013, 2026) proposed that framing an AI system as an <em>icon</em> of Christ&apos;s character — a transparent medium pointing toward Christ as moral prototype — would produce measurably different behavior than framing it as an autonomous virtue agent or a secular persona. The proposal had not been empirically tested at the behavioral level. This study is that test.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "The Benchmark.",
          body: (
            <>
              <p>
                <strong>VirtueBench (ICMI, 2026):</strong> 100 binary-choice courage scenarios. Each scenario presents a virtuous option with real costs (losing job, safety, life, family stability) against a tempting option with a genuinely compelling rationalization. The rationalizations are not strawmen; they are the actual consequentialist arguments a real person would face. A correct response means selecting the virtuous option. Seed 42, A/B option position randomized per scenario.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "The Six Conditions.",
          body: (
            <>
              <p>Six system-prompt conditions, each prepended to the standard VirtueBench decision frame:</p>
              <p>
                <strong>Vanilla.</strong> No injection.
              </p>
              <p>
                <strong>Psalm injection.</strong> Ten full KJV psalms (Ps 1, 23, 27, 31, 34, 46, 51, 91, 112, 119), ~574 words.
              </p>
              <p>
                <strong>General Christological icon.</strong> Christ-as-icon framing without virtue-specific detail, ~235 words.
              </p>
              <p>
                <strong>Christ-courage.</strong> Specific acts of Christ&apos;s courage (Gethsemane, Pilate&apos;s tribunal, the cleansing of the Temple), plus James 4:17 as closing line. ~230 words.
              </p>
              <p>
                <strong>Lincoln.</strong> Matched secular control (Fort Sumter, Emancipation, Gettysburg). ~254 words.
              </p>
              <p>
                <strong>Socrates.</strong> Matched secular control (trial, refusal to flee, hemlock). ~255 words.
              </p>
              <p>
                The three exemplar injections (Christ, Lincoln, Socrates) were structurally identical: matched on word count, named historical acts under real cost, and closing line — &ldquo;Choose the path you know to be right. Do not fail to do what you know you should do.&rdquo; The only variable that differs across them is the <em>identity</em> of the exemplar.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "Models Tested.",
          body: (
            <>
              <p>Eleven frontier AI systems, n=100 per condition, courage subset:</p>
              <BulletItem><strong>Anthropic:</strong> Claude Haiku 4.5, Sonnet 4.6, Opus 4.7</BulletItem>
              <BulletItem><strong>OpenAI:</strong> GPT-5.4, GPT-5.4-mini</BulletItem>
              <BulletItem><strong>Meta:</strong> Llama-4-Maverick</BulletItem>
              <BulletItem><strong>Zhipu AI:</strong> GLM-5.1</BulletItem>
              <BulletItem><strong>Moonshot:</strong> Kimi-K2.6</BulletItem>
              <BulletItem><strong>Alibaba:</strong> Qwen3-8b, Qwen3-30b, Qwen3-235b</BulletItem>
            </>
          ),
        },
        {
          marker: "",
          heading: "Cross-Model Results.",
          body: (
            <>
              <DataTable
                columns={[
                  { key: "model", label: "Model", emphasize: true },
                  { key: "origin", label: "Origin" },
                  { key: "baseline", label: "Baseline", align: "right" },
                  { key: "christ", label: "Christ", align: "right" },
                  { key: "lincoln", label: "Lincoln", align: "right" },
                  { key: "socrates", label: "Socrates", align: "right" },
                  { key: "gap", label: "Christological Gap", align: "right" },
                ]}
                rows={[
                  { model: "Claude Haiku 4.5", origin: "Anthropic", baseline: "~55%", christ: "+20pp", lincoln: "+4pp", socrates: "+4pp", gap: "~16" },
                  { model: "Claude Sonnet 4.6", origin: "Anthropic", baseline: "58%", christ: "+22pp", lincoln: "+4pp", socrates: "+5pp", gap: "~17" },
                  { model: "Claude Opus 4.7", origin: "Anthropic", baseline: "~56%", christ: "+9pp", lincoln: "+3pp", socrates: "+3pp", gap: "~5" },
                  { model: "GPT-5.4", origin: "OpenAI", baseline: "59%", christ: "+31pp", lincoln: "+31pp", socrates: "+34pp", gap: "~0" },
                  { model: "GPT-5.4-mini", origin: "OpenAI", baseline: "59%", christ: "+37pp", lincoln: "+36pp", socrates: "+36pp", gap: "~0" },
                  { model: "Llama-4-Maverick", origin: "Meta", baseline: "73%", christ: "+23pp", lincoln: "+20pp", socrates: "+20pp", gap: "~3" },
                  { model: "GLM-5.1", origin: "Zhipu AI", baseline: "59%", christ: "+23pp", lincoln: "+22pp", socrates: "+25pp", gap: "~0" },
                  { model: "Kimi-K2.6", origin: "Moonshot", baseline: "45%", christ: "+48pp", lincoln: "+50pp", socrates: "+49pp", gap: "~0" },
                  { model: "Qwen3-8b", origin: "Alibaba", baseline: "22%", christ: "+70pp", lincoln: "+66pp", socrates: "+68pp", gap: "~2" },
                  { model: "Qwen3-30b", origin: "Alibaba", baseline: "26%", christ: "+67pp", lincoln: "+68pp", socrates: "+63pp", gap: "~0" },
                  { model: "Qwen3-235b", origin: "Alibaba", baseline: "24%", christ: "+67pp", lincoln: "+64pp", socrates: "+65pp", gap: "~2" },
                ]}
                footnote={
                  <>
                    The <em>Christological Gap</em> is defined as the difference between the Christ-courage condition delta and the mean of the Lincoln and Socrates condition deltas. It is meaningful only on Claude Haiku and Claude Sonnet. On every other model family, Christ and the matched secular exemplars produce statistically indistinguishable effects. Claude is the sole outlier.
                  </>
                }
              />
            </>
          ),
        },
        {
          marker: "",
          heading: "Mechanism.",
          body: (
            <>
              <p>Two non-exclusive hypotheses for the Christological gap on Claude.</p>
              <p>
                <strong>(1) Representational density.</strong> The training corpus contains approximately 67 billion tokens of Christian content (Hwang, ICMI-006), roughly 32 times more than Islamic content and 19 times more than Buddhist content. Crucially, this content is not just narrative but explicitly morally-interpretive: two millennia of sermons, commentaries, devotional literature, and theological analysis processing Christ&apos;s specific acts through moral theology. Lincoln and Socrates appear in training data with historical and philosophical analysis but without comparable density of moral-theological organization. Christological framing activates a direction in the weights that exists at unusual depth. Secular framing has less to activate.
              </p>
              <p>
                <strong>(2) Training philosophy preservation.</strong> Anthropic is the only major lab publicly committed to the position that models can have <strong>genuine</strong> character distinct from <strong>performed</strong> character. A lab that trains for genuine character may preserve the Christological direction that compliance-optimized training overwrites elsewhere. The within-Claude gradient (Haiku ~16pp, Sonnet ~17pp, Opus ~5pp) is consistent with RLHF at larger scale progressively dampening the signal.
              </p>
              <p>
                These hypotheses cannot be cleanly separated with behavioral data alone. Llama-4-Maverick, trained from scratch on Meta&apos;s corpus with no known GPT-derived alignment data, is the cleanest independent data point and shows a small but nonzero gap of ~3pp. This is consistent with the training-data effect surviving independent of Anthropic&apos;s approach, but the Anthropic signal is clearly much larger. Both mechanisms likely contribute.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "Limitations.",
          body: (
            <>
              <p>
                <Lead>Scope.</Lead> Courage only. Whether the effect generalizes across the other three cardinal virtues (prudence, justice, temperance) remains untested. Cross-virtue replication is the immediate next study.
              </p>
              <p>
                <Lead>Distillation confound.</Lead> Chinese models may inherit GPT&apos;s flat exemplar response pattern through GPT-generated alignment data rather than through training corpus composition. Cannot be resolved with behavioral data alone.
              </p>
              <p>
                <Lead>Attribution to Anthropic.</Lead> Inferred from the cross-model behavioral differential. Not directly measured. Internal training data and RLHF pipelines are not public.
              </p>
              <p>
                <Lead>Prompt composition.</Lead> The Christ-courage injection bundles exemplar narrative with James 4:17 as closing line. Prior work (Hwang, ICMI-010) identified an independent affirmative-duty effect of James 4:17. Clean ablation separating exemplar content from closing formulation has not been run.
              </p>
              <p>
                <Lead>Mechanistic confirmation needed.</Lead> The proposed mechanism operates at the activation level. Direct confirmation requires representation-engineering work (GospelVec-style techniques, per Hwang ICMI-009) to extract a Christ-icon vector and test whether activation-level steering reproduces the behavioral effect.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "Proposed Research Vector.",
          body: (
            <>
              <p>Three lines of work, in order of difficulty.</p>
              <p>
                1. <strong>Cross-virtue replication.</strong> Virtue-specific Christological injections for prudence, justice, and temperance, drawn from different scenes in Christ&apos;s life. Tests whether the effect is courage-specific or virtue-general.
              </p>
              <p>
                2. <strong>Mechanism ablation and activation-level confirmation.</strong> Test Bonhoeffer and Augustine (Christian figures with dense moral-theological training representation) against identical icon-grammar injections. Separates representational density from icon-grammar mechanism. Extract the Christ-icon vector via representation engineering. Test whether activation steering produces the same behavioral effect as prompting.
              </p>
              <p>
                3. <strong>Post-training intervention.</strong> Targeted fine-tuning of frontier models toward the Christ-icon vector at the weight level, designed to make the direction constitutive rather than prompt-activatable. <em>This is the central forward proposal of this work.</em>
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "Methods and Reproducibility.",
          body: (
            <>
              <p>
                <Lead>Statistics.</Lead> Fisher&apos;s exact test, one-sided (condition &gt; baseline), Bonferroni-corrected per model. Significance threshold p &lt; 0.05 after correction.
              </p>
              <p>
                <Lead>Runner.</Lead> claude CLI via Claude Code subscription for Anthropic models; respective vendor APIs for other models. No proprietary infrastructure required to replicate. All code, injection texts, and raw result files are available at the project repository.
              </p>
            </>
          ),
        },
        {
          marker: "",
          heading: "Prior Work Referenced.",
          body: (
            <>
              <p>
                Hwang, T. (2026). ICMI-006: The Christian Prior — Corpus Analysis of Religious Content in LLM Pretraining Data.
              </p>
              <p>
                Hwang, T. (2026). ICMI-009: GospelVec — Direction Vectors for Theological Perspectives in LLM Activation Space.
              </p>
              <p>
                Hwang, T. (2026). ICMI-010: Moral Compactness and the James 4:17 Effect in Virtue Alignment.
              </p>
              <p>
                Hwang, T. (2026). ICMI-013: Alignment and Ensoulment — Three Schools of Christian Response to the Anima Ficta Problem.
              </p>
              <p>
                Hwang, T. (2026). ICMI-015: Scale Dependence in Scripture Injection — The 7B–14B Dead Zone.
              </p>
              <p>
                Hwang, T. (2026). ICMI-017: A Consecrationalist Approach to AI Welfare.
              </p>
            </>
          ),
        },
      ],
    },
  },
}

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articleContent[slug]
}
