"use client";

import { Breadcrumb, Flex, Image } from "antd";
import { Button, Col, Row, Tag } from "@/modules/web-feature-shared";
import React from "react";
import { useParams } from "next/navigation";
import { RecipeKey, useGetRecipeById } from "@/queries";
import { Typography } from "antd";
import { capitalize, startCase } from "lodash";
import { getCookingInstructions, getTime } from "./helpers";
import { IngredientSelector } from "../IngredientSelector";
import { useRouter } from "next/navigation";
import "./styles.scss";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { CreateEditRecipe } from "../CreateEditRecipe";
import { DeleteRecipe } from "../Actions/DeleteRecipe";

const { Text, Paragraph } = Typography;

export const RecipeDetail = () => {
  const router = useRouter();
  const param = useParams();
  const { recipe } = useGetRecipeById({
    id: param.id as string,
  });

  return (
    <Flex gap={16} vertical>
      <Flex justify="space-between" align="center">
        <Breadcrumb
          className="mb-4"
          items={[
            {
              title: <a>Recipes</a>,
              onClick: () => {
                router.push("/recipes");
              },
            },
            {
              title: recipe?.[RecipeKey.NAME],
            },
          ]}
        />
        <Flex gap={8}>
          <CreateEditRecipe
            content={<Button size="middle">Create Recipe</Button>}
          />
          <CreateEditRecipe
            content={
              <Button type="default" size="middle" icon={<EditOutlined />}>
                Edit
              </Button>
            }
            id={recipe?.[RecipeKey.ID]}
          />
          <DeleteRecipe
            isNavigate
            content={
              <Button
                type="default"
                size="middle"
                danger
                icon={<DeleteOutlined />}
              >
                Delete
              </Button>
            }
            id={recipe?.[RecipeKey.ID]}
          />
        </Flex>
      </Flex>
      <Flex className="w-full flex-col rounded-xl bg-white p-4 shadow-md">
        <Row className="w-full">
          <Col span={14} className="flex flex-col gap-2">
            <Row>
              <Col span={12}>
                <Text strong>{`Recipe Name: `}</Text>
                <Text>{recipe?.[RecipeKey.NAME]}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Text strong>{`Difficulty Level: `}</Text>
                <Tag variant="default">
                  {capitalize(
                    startCase(
                      recipe?.[RecipeKey.DIFFICULTY_LEVEL].replace(/_/g, " "),
                    ),
                  )}
                </Tag>
              </Col>
              <Col span={8}>
                <Text strong>{`Prep Time: `}</Text>
                <Text>{getTime(recipe?.[RecipeKey.PREP_TIME])}</Text>
              </Col>
              <Col span={8}>
                <Text strong>{`Cook Time: `}</Text>
                <Text>{getTime(recipe?.[RecipeKey.COOK_TIME])}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="flex gap-1">
                <Text strong>{`Meal Type: `}</Text>
                <Flex gap={4}>
                  {recipe?.[RecipeKey.MEAL_TYPE]?.map((mealType, index) => (
                    <Tag key={index} variant="default">
                      {capitalize(startCase(mealType.replace(/_/g, " ")))}
                    </Tag>
                  ))}
                </Flex>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="flex gap-1">
                <Text strong>{`Nutritional Quantity: `}</Text>
                <Flex gap={8} className="flex-wrap">
                  {recipe?.[RecipeKey.NUTRITIONAL_QUALITY]?.map(
                    (nutritionalQuality, index) => (
                      <Tag key={index} variant="default">
                        {capitalize(
                          startCase(nutritionalQuality.replace(/_/g, " ")),
                        )}
                      </Tag>
                    ),
                  )}
                </Flex>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text strong>{`Cooking Instructions: `}</Text>
                {getCookingInstructions(
                  recipe?.[RecipeKey.COOKING_INSTRUCTIONS],
                )}
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <IngredientSelector
                  recipeIngredients={recipe?.[RecipeKey.INGREDIENT_LIST]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text strong>{`Description: `}</Text>
                <Paragraph className="ml-4">
                  {recipe?.[RecipeKey.DESCRIPTION]}
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Image src={recipe?.[RecipeKey.IMAGE_URL]} alt="Recipe Image" />
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
