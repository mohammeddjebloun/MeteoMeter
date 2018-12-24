
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.GroupAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the GroupAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterGroupAAAAA")]
	public partial class GroupAAAAA : Controller
	{
		private IGroupService _GroupService;
		private IUserProfileService _UserProfileService;
		private IPictureService _PictureService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.GroupAAAAAController"/> class.
		/// </summary>
		public GroupAAAAA(IGroupService GroupService,IUserProfileService UserProfileService,IPictureService PictureService)
		{
			_GroupService = GroupService;
			_UserProfileService = UserProfileService;
			_PictureService = PictureService;
		}

		[HttpPost]
		[Route("/api/group/create")]
		public async Task<IActionResult> Create(CreateGroupaaaaaaaaaaaaaa group)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Group =  group.GetGroupFromViewModel();
				await _GroupService.Save(Group );
				var UserProfile =  group.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpDelete]
		[Route("/api/group/delete")]
		public async Task<IActionResult> Delete(int groupId)
		{
			
			try
			{
				return Ok(true);
			}
			catch (Exception xcp)
			{
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpPut]
		[Route("/api/group/update")]
		public async Task<IActionResult> Update(EditGroupaaaaaaaaaaaaaa group)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Group =  group.GetGroupFromViewModel();
				await _GroupService.Save(Group);
				var UserProfile =  group.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/group/get")]
		[ProducesResponseType(typeof(Groupaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> Get(string groupId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Groupaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/group/list")]
		[ProducesResponseType(typeof(Groupaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> List(Pagingaaaaaaaaaaaaaa paging,int userProfileId)
		{
			

			try
			{
				var list = new List<Groupaaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <Groupaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/group/listTargetableGroups")]
		[ProducesResponseType(typeof(TargetGroupaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> ListTargetableGroups(string userProfileId)
		{
			

			try
			{
				var list = new List<TargetGroupaaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <TargetGroupaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/group/getMembers")]
		[ProducesResponseType(typeof(Useraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetMembers(Pagingaaaaaaaaaaaaaa paging,int groupId)
		{
			

			try
			{
				var list = new List<Useraaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <Useraaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpPut]
		[Route("/api/group/updateMembers")]
		public async Task<IActionResult> UpdateMembers(UpdateMembersaaaaaaaaaaaaaa membersList)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var UserProfile =  membersList.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile);
				var Group =  membersList.GetGroupFromViewModel();
				await _GroupService.Save(Group);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpPut]
		[Route("/api/group/removeMember")]
		public async Task<IActionResult> RemoveMember(int userProfileId,int groupId)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}
	}
}