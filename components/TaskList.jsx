import React from "react";
import DeleteForm from "./DeleteForm";
import Link from "next/link";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
    const tasks = await getAllTasks();
//   const tasks = await prisma.task.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No task to show...</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-ls shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 item-center">
              <Link href={`/task/${task.id}`} className="btn btn-accent btn-xs">
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
