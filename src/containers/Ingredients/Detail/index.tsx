"use client";

import { Button, Col, Row, Tag } from "@/modules/web-feature-shared";
import { IngredientKey, useGetIngredientById } from "@/queries";
import { Breadcrumb, Flex, Image, Typography } from "antd";
import { useParams, useRouter } from "next/navigation";
import { CreateEditIngredient } from "../CreateEditIngredient";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { DeleteIngredient } from "../Actions/DeleteIngredient";
import "./styles.scss";
import { capitalize, startCase } from "lodash";

const { Text } = Typography;

export const IngredientDetail = () => {
  const router = useRouter();
  const param = useParams();
  const { ingredient } = useGetIngredientById({
    id: param.id as string,
  });

  const getMacro = (value: number) => {
    if (value === 0) return "--";
    return `${value} g(s)`;
  };

  return (
    <Flex gap={16} vertical>
      <Flex justify="space-between" align="center">
        <Breadcrumb
          className="mb-4"
          items={[
            {
              title: <a>Ingredients</a>,
              onClick: () => {
                router.push("/ingredients");
              },
            },
            {
              title: ingredient?.[IngredientKey.NAME],
            },
          ]}
        />
        <Flex gap={8}>
          <CreateEditIngredient
            content={<Button size="middle">Create Ingredients</Button>}
          />
          <CreateEditIngredient
            content={
              <Button type="default" size="middle" icon={<EditOutlined />}>
                Edit
              </Button>
            }
            id={ingredient?.[IngredientKey.ID]}
          />
          <DeleteIngredient
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
            id={ingredient?.[IngredientKey.ID]}
          />
        </Flex>
      </Flex>
      <Flex className="w-full flex-col rounded-xl bg-white p-4 shadow-md">
        <Row className="w-full">
          <Col span={14} className="flex flex-col gap-2">
            <Row>
              <Col span={12}>
                <Text strong>{`Ingredient Name: `}</Text>
                <Text>{ingredient?.[IngredientKey.NAME]}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Text strong>{`Type: `}</Text>
                <Tag variant="default">
                  {capitalize(startCase(ingredient?.[IngredientKey.TYPE]))}
                </Tag>
              </Col>
              <Col span={12}>
                <Text strong>{`Unit: `}</Text>
                <Text>{ingredient?.[IngredientKey.UNIT]}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Text strong>{`Calories: `}</Text>
                <Text>{getMacro(ingredient?.[IngredientKey.CALORIES])}</Text>
              </Col>
              <Col span={12}>
                <Text strong>{`Carbs: `}</Text>
                <Text>{getMacro(ingredient?.[IngredientKey.CARBS])}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Text strong>{`Proteins: `}</Text>
                <Text>{getMacro(ingredient?.[IngredientKey.PROTEIN])}</Text>
              </Col>
              <Col span={12}>
                <Text strong>{`Fat: `}</Text>
                <Text>{getMacro(ingredient?.[IngredientKey.FAT])}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text strong>{`Description: `}</Text>
                <Text>{ingredient?.[IngredientKey.DESCRIPTION]}</Text>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Image
              src={ingredient?.[IngredientKey.IMAGE_URL]}
              alt="Ingredient Image"
            />
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
