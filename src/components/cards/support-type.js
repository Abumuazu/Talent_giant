/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Image, Text } from 'theme-ui';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { rgba } from 'polished';
import {useState} from "react"

const SupportType = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div sx={styles.card}>
      <Flex as="figure" sx={styles.icon}>
        {/* <Image src={data.icon} alt="" /> */}
      </Flex>
      <div sx={styles.content}>
    <div style= {{cursor: 'pointer', display:'flex', justifyContent:'space-between'}} onClick={() => setIsActive(!isActive)}>
    <Heading as="h3"  >
          {data.title}{' '}
          {/* <HiOutlineArrowNarrowRight color={rgba('#0F2137', 0.3)} /> */}
        
        </Heading>
        <div style={{marginLeft: 20, color:'#000', fontWeight:'900'}}>{isActive ? '-' : '>'}</div>
    </div>
        {isActive && <Text as="p">{data.text}</Text>}
      </div>
    </div>
  );
};

export default SupportType;

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    mt: 7,
  },

  content: {
    h3: {
      fontSize: [2, null, null, 3],
      fontWeight: 700,
      mb: 2,
      display: 'flex',
      alignItems: 'flex-start',
      svg: {
        ml: 2,
      },
    },
    p: {
      fontSize: [1, null, null, 2],
    },
  },
};
