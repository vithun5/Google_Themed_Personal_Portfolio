import { useRouter } from "next/router";
import { relatedSearch } from "../constants/constants";
import { AiOutlineSearch } from "react-icons/ai";
import {
  RelatedSearchContainer,
  Heading,
  SearchWrapper,
  SearchItem,
  SearchText,
} from "./RelatedSearch.styled";
const RelatedSearch = () => {
  const router = useRouter();
  return (
    <RelatedSearchContainer>
      <Heading>
        <p>Related Search :</p>
      </Heading>
      <SearchWrapper>
        {relatedSearch.map(({ text, href }, index) => {
          return (
            <SearchItem
              onClick={() => {
                router.push(href);
              }}
            >
              {" "}
              <AiOutlineSearch size={20} />
              {index != 2 ? (
                <SearchText>
                  {text.split(" ")[0]} <span>{text.split(" ")[1]}</span>
                </SearchText>
              ) : (
                <SearchText>
                  <span>{text.split(" ")[0]}</span> {text.split(" ")[1]}
                </SearchText>
              )}
            </SearchItem>
          );
        })}
      </SearchWrapper>
    </RelatedSearchContainer>
  );
};
export default RelatedSearch;
