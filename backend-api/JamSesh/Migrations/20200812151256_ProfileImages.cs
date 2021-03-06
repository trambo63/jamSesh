﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JamSesh.Migrations
{
    public partial class ProfileImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 1,
                column: "EventDate",
                value: new DateTime(2020, 8, 12, 11, 12, 55, 76, DateTimeKind.Local).AddTicks(6128));

            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 2,
                column: "EventDate",
                value: new DateTime(2020, 8, 12, 11, 12, 55, 80, DateTimeKind.Local).AddTicks(5019));

            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 3,
                column: "EventDate",
                value: new DateTime(2020, 8, 12, 11, 12, 55, 80, DateTimeKind.Local).AddTicks(5107));

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 1,
                column: "Image",
                value: "AvatarImage1.png");

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 2,
                column: "Image",
                value: "AvatarImage2.png");

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 3,
                column: "Image",
                value: "AvatarImage3.png");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 1,
                column: "EventDate",
                value: new DateTime(2020, 8, 7, 13, 51, 18, 620, DateTimeKind.Local).AddTicks(5908));

            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 2,
                column: "EventDate",
                value: new DateTime(2020, 8, 7, 13, 51, 18, 625, DateTimeKind.Local).AddTicks(5766));

            migrationBuilder.UpdateData(
                table: "Jams",
                keyColumn: "JamId",
                keyValue: 3,
                column: "EventDate",
                value: new DateTime(2020, 8, 7, 13, 51, 18, 625, DateTimeKind.Local).AddTicks(5903));

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 1,
                column: "Image",
                value: "DefaultProfilePhoto.jpg");

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 2,
                column: "Image",
                value: "DefaultProfilePhoto.jpg");

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "ProfileId",
                keyValue: 3,
                column: "Image",
                value: "DefaultProfilePhoto.jpg");
        }
    }
}
