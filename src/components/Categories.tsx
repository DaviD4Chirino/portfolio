"use client";
import "./sass/Categories.sass";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { useEffect, useRef, useState } from "react";
import { filterArrayString } from "@/utils/filtration";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { toUpperFirst } from "@/utils/formatCase";
import { BiReset as ResetI } from "react-icons/bi";

const scrollStrength = 100;

import {
  AiFillLeftCircle as LeftArrowI,
  AiFillRightCircle as RightArrowI,
} from "react-icons/ai";
import Input from "@mui/material/Input";
import { scrollLeft, scrollRight } from "@/utils/scroll";

interface CategoryProps {
  categories: string[];
}
export default function Categories({ categories }: CategoryProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const router = useRouter();
  const pathName = usePathname();
  const categoriesRef = useRef<any>();
  const [filterCategory, setFilterCategory] = useState<string[]>(categories);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  function addCategory(category: string) {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    const updatedFilterCategory = [
      ...updatedSelectedCategories.sort(),
      ...categories.filter((c) => !updatedSelectedCategories.includes(c)),
    ];

    setSelectedCategories(updatedSelectedCategories.sort());
    setFilterCategory(updatedFilterCategory);
  }

  function onChange(input: string) {
    if (input === "") {
      setFilterCategory(categories);
      return;
    }
    const filteredCategories = filterArrayString(categories, input);

    const perfectMatch = filteredCategories.find(
      (category) => category.toLowerCase() === input.toLowerCase()
    );

    const sortedCategories = perfectMatch
      ? [perfectMatch, ...filteredCategories.filter((c) => c !== perfectMatch)]
      : filteredCategories;

    const alphabeticallySortedCategories = sortedCategories.sort();

    setFilterCategory(alphabeticallySortedCategories);
  }

  function isSelected(category: string) {
    return selectedCategories.includes(category);
  }

  useEffect(() => {
    if (search) {
      setSelectedCategories(search.split(","));
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      router.push(`${pathName}`);
      return;
    }
    const encodedParams = selectedCategories.join(",");
    router.push(`${pathName}?category=${encodedParams}`);
    return () => {};
  }, [selectedCategories]);

  function cleanSelected() {
    setSelectedCategories([]);
  }

  return (
    <nav id="Categories">
      <form action="">
        <div className="flex align-content-center justify-content-between align-items-center">
          <Input
            type="text"
            name="search"
            size="small"
            sx={{
              padding: 0,
              margin: 0,
            }}
            id="SearchInput"
            onChange={(e: any) => onChange(e.target.value)}
            placeholder="Do i know...?"
            title="Language"
            endAdornment={
              <IconButton edge="end" onClick={cleanSelected} color="primary">
                <ResetI />
              </IconButton>
            }
          />
          <div className="buttons">
            <IconButton
              edge="start"
              color="primary"
              onClick={() => scrollLeft(categoriesRef, scrollStrength)}
            >
              <LeftArrowI />
            </IconButton>
            <IconButton
              edge="end"
              color="primary"
              onClick={() => scrollRight(categoriesRef, scrollStrength)}
            >
              <RightArrowI />
            </IconButton>
          </div>
        </div>
      </form>
      <div className="categories-container flex gap-05" ref={categoriesRef}>
        {filterCategory.map((category, i) => (
          <Chip
            label={toUpperFirst(category)}
            key={i}
            color="primary"
            className="category"
            variant={isSelected(category.toLowerCase()) ? "filled" : "outlined"}
            onClick={() => addCategory(category.toLowerCase())}
          />
        ))}
      </div>
    </nav>
  );
}
