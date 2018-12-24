
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

namespace MeteoMeter.Backend.Api.IdeaAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the IdeaAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterIdeaAAAAA")]
	public partial class IdeaAAAAA : Controller
	{
		private IIdeaService _IdeaService;
		private IGroupService _GroupService;
		private IUserProfileService _UserProfileService;
		private IPictureService _PictureService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.IdeaAAAAAController"/> class.
		/// </summary>
		public IdeaAAAAA(IIdeaService IdeaService,IGroupService GroupService,IUserProfileService UserProfileService,IPictureService PictureService)
		{
			_IdeaService = IdeaService;
			_GroupService = GroupService;
			_UserProfileService = UserProfileService;
			_PictureService = PictureService;
		}

		[HttpPost]
		[Route("/api/idea/create")]
		public async Task<IActionResult> Create(CreateIdeaaaaaaaaaaaaaaa idea)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Idea =  idea.GetIdeaFromViewModel();
				await _IdeaService.Save(Idea );
				var Group =  idea.GetGroupFromViewModel();
				await _GroupService.Save(Group );
				var UserProfile =  idea.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile );
				var Picture =  idea.GetPictureFromViewModel();
				await _PictureService.Save(Picture );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/idea/getEditableIdea")]
		[ProducesResponseType(typeof(EditableIdeaaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> getEditableIdea(int ideaId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new EditableIdeaaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpPut]
		[Route("/api/idea/update")]
		public async Task<IActionResult> Update(EditIdeaaaaaaaaaaaaaaa idea)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Idea =  idea.GetIdeaFromViewModel();
				await _IdeaService.Save(Idea);
				var Group =  idea.GetGroupFromViewModel();
				await _GroupService.Save(Group);
				var Picture =  idea.GetPictureFromViewModel();
				await _PictureService.Save(Picture);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpDelete]
		[Route("/api/idea/delete")]
		public async Task<IActionResult> Delete(int ideaId)
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

		[HttpGet]
		[Route("/api/idea/getDefaultPicture")]
		[ProducesResponseType(typeof(Pictureaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> getDefaultPicture()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Pictureaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}