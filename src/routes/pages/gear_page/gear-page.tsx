import "./gear-page.scss";
import GuitarGear from "../../../components/guitar_gear/guitar-gear";

const GearPage = () => {
  return (
    <main className="gear-page">
      <ul>
        <li>
          <GuitarGear
            item="Electric Guitar"
            description="Electric guitars have a solid body and are designed to be played with an amplifier to produce a louder sound. They typically have steel strings and produce a wide range of tones from clean to distorted. They are commonly used in rock, pop, and jazz music."
            imagePath="/guitar_gear/electric-guitar.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Acoustic Guitar"
            description="Acoustic guitars have a hollow body and produce sound through the vibration of the strings and resonance of the body. They can have steel or nylon strings and are used in a variety of musical genres, including folk, country, and indie."
            imagePath="/guitar_gear/acoustic-guitar.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Semi-Acoustic Guitar"
            description="Semi-acoustic guitars, also known as electric-acoustic guitars, have a hollow body like an acoustic guitar but are equipped with pickups to be played through an amplifier. They are one of the ways to produce a louder acoustic sound for an audiance through amplification, same as a solid body electric guitar."
            imagePath="/guitar_gear/semi-acoustic-guitar.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Classical Guitar"
            description="Classical guitars have nylon strings and a wider neck compared to steel-string guitars. They produce a warm and mellow tone, making them ideal for classical, flamenco, and fingerstyle music. They are typically played without amplification."
            imagePath="/guitar_gear/classical-guitar.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Pick"
            description="Guitar picks come in various sizes and shapes, each offering a different feel and sound. Thicker picks generally produce a fuller tone and are more durable, while thinner picks are more flexible and provide a brighter sound. "
            imagePath="/guitar_gear/picks.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Tuner"
            description="Guitar tuners are devices used to accurately adjust the pitch of each string on a guitar. They work by displaying the pitch of the string being played and indicating whether it is too high, too low, or in tune. Tuners are essential for ensuring that a guitar is in tune and producing the correct notes."
            imagePath="/guitar_gear/tuner.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Capo"
            description="A guitar capo is a small clamp-like device that is placed across the fretboard of a guitar to change the pitch of the strings. By using a capo, you can quickly and easily transpose the key of a song without having to change to different chord shapes."
            imagePath="/guitar_gear/capo.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Metronome"
            description="Using a metronome when practicing guitar helps to improve your sense of rhythm and timing. It can also help you build speed, increase your accuracy, and track your progress as you practice exercises and focus on playing on beat."
            imagePath="/guitar_gear/metronome.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Amplifier"
            description="A guitar amplifier is an electronic device that takes the electrical signal from a guitar and increases its power in order to produce sound through a speaker. It controls various aspects of the sound, such as volume, tone, and effects like distortion or reverb. Amplifiers can come in different sizes and styles, ranging from small practice amps to large, powerful stage amps."
            imagePath="/guitar_gear/amplifier.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Effect Pedal"
            description="A guitar effects pedal is a device that alters the sound of an electric guitar signal by applying various audio effects, such as distortion, delay, reverb, modulation, and more. These pedals can be used to enhance the tone and texture of a guitar's sound, allowing musicians to create unique sounds and styles. Each pedal typically has its own controls to adjust the effect to the player's liking."
            imagePath="/guitar_gear/effect-pedals.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Guitar Cable"
            description="A guitar cable is a cord that connects an electric guitar to an amplifier or other audio equipment. It is typically a shielded cable with a 6.35mm (1/4-inch) plug on each end."
            imagePath="/guitar_gear/guitar-wire.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Guitar Cable Adapter"
            description="A 6.35mm (1/4-inch) to 3.5mm (1/4-inch) adapter can be used to plug a guitar cable into other compatible devices."
            imagePath="/guitar_gear/guitar-cable-adapters.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Guitar Strap"
            description="A guitar strap is usually leather or fabric that attaches to a guitar so it can be comfortably worn around the player's shoulder or neck. It helps support the weight of the guitar and allows the player to easily play the instrument standing up or moving around."
            imagePath="/guitar_gear/guitar-strap.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Guitar Stand"
            description="A guitar stand typically features padded arms or hooks to cradle the body of the guitar and prevent it from falling or getting scratched. Guitar stands have different shapes depending on the guitar."
            imagePath="/guitar_gear/guitar-stand.jpg"
          />
        </li>
        <li>
          <GuitarGear
            item="Guitar Bag/Case"
            description="A guitar bag or case is a protective covering that is used to transport and store a guitar. It provides padding to prevent damage from impacts, scratches, or exposure to the elements. There is usually space left for related guitar accessories."
            imagePath="/guitar_gear/guitar-case.jpg"
          />
        </li>
      </ul>
    </main>
  );
};

export default GearPage;
